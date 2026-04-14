'use strict';

const { execFileSync } = require('child_process');

const {
  CLAUDE_CLI,
  COMMIT_JSON_SCHEMA,
  FAVORITE_MODELS,
  GEMINI_DIRECT,
  MANUAL_VALUE,
  MAX_BUFFER,
  OPENAI_DIRECT,
  PROVIDER_CLAUDE_CLI,
  PROVIDER_GEMINI,
  PROVIDER_OPENAI,
  PROVIDER_OPENROUTER,
} = require('./shared');
const {
  buildPrompt,
  normalizeAiSuggestion,
  parseJsonResponse,
} = require('./commit');

const WARNING_VALUE = '__warning__';

const PROVIDER_DEFS = {
  [PROVIDER_CLAUDE_CLI]: {
    choiceValue: CLAUDE_CLI,
    defaultSmallModel: 'haiku',
    defaultBigModel: 'sonnet',
    envVar: null,
    label: 'Claude CLI',
    invoke: (prompt, model) => callClaudeCli(prompt, model),
  },
  [PROVIDER_GEMINI]: {
    choiceValue: GEMINI_DIRECT,
    defaultSmallModel: 'gemini-2.5-flash',
    defaultBigModel: 'gemini-2.5-pro',
    envVar: 'GEMINI_API_KEY',
    label: 'Gemini',
    invoke: (prompt, model) => callGemini(prompt, model),
  },
  [PROVIDER_OPENAI]: {
    choiceValue: OPENAI_DIRECT,
    defaultSmallModel: 'gpt-5.4-mini',
    defaultBigModel: 'gpt-5.4',
    envVar: 'OPENAI_API_KEY',
    label: 'OpenAI',
    invoke: (prompt, model) => callOpenAi(prompt, model),
  },
  [PROVIDER_OPENROUTER]: {
    choiceValue: null,
    defaultSmallModel: 'google/gemini-2.5-flash-lite',
    defaultBigModel: 'google/gemini-2.5-flash',
    envVar: 'OPENROUTER_API_KEY',
    label: 'OpenRouter',
    invoke: (prompt, model) => callOpenRouter(prompt, model),
  },
};

function callClaudeCli(prompt, cliModel) {
  return execFileSync('claude', ['-p', '--model', cliModel], {
    input: prompt,
    encoding: 'utf-8',
    timeout: 60000,
    maxBuffer: MAX_BUFFER,
  });
}

async function callGemini(prompt, model) {
  const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-goog-api-key': process.env.GEMINI_API_KEY,
    },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: 0.3,
        responseMimeType: 'application/json',
        responseJsonSchema: COMMIT_JSON_SCHEMA,
      },
    }),
  });

  return extractResponseText(response, 'Gemini API', data => data.candidates?.[0]?.content?.parts
    ?.map(part => part.text || '')
    .join('')
    .trim());
}

async function callOpenAi(prompt, model) {
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify(buildChatCompletionPayload(prompt, model)),
  });

  return extractResponseText(response, 'OpenAI API', data => data.choices?.[0]?.message?.content);
}

async function callOpenRouter(prompt, model) {
  const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
    },
    body: JSON.stringify(buildChatCompletionPayload(prompt, model)),
  });

  return extractResponseText(response, 'OpenRouter API', data => data.choices?.[0]?.message?.content);
}

function buildChatCompletionPayload(prompt, model) {
  return {
    model,
    messages: [{ role: 'user', content: prompt }],
    temperature: 0.3,
    response_format: {
      type: 'json_schema',
      json_schema: {
        name: 'commit_message',
        strict: true,
        schema: COMMIT_JSON_SCHEMA,
      },
    },
  };
}

async function extractResponseText(response, sourceLabel, pickText) {
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`${sourceLabel} error (${response.status}): ${errorText.slice(0, 200)}`);
  }

  const data = await response.json();
  const text = pickText(data);

  if (!text) {
    throw new Error(`${sourceLabel} returned an empty response`);
  }

  return text;
}

async function fetchModels() {
  const response = await fetch('https://openrouter.ai/api/v1/models', {
    headers: {
      Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
    },
  });

  if (!response.ok) {
    throw new Error(`OpenRouter models API returned ${response.status}`);
  }

  const data = await response.json();
  const allModels = (data.data || []).filter(model => model.id && model.name);
  const favoriteIds = new Set(FAVORITE_MODELS);

  const pinned = FAVORITE_MODELS
    .map(id => allModels.find(model => model.id === id))
    .filter(Boolean)
    .map(model => ({ value: model.id, name: model.name }));

  const rest = allModels
    .filter(model => !favoriteIds.has(model.id))
    .sort((left, right) => left.name.localeCompare(right.name))
    .map(model => ({ value: model.id, name: model.name }));

  return { pinned, rest };
}

function detectCurrentShell() {
  const shell = (process.env.SHELL || '').toLowerCase();
  const comSpec = (process.env.ComSpec || '').toLowerCase();

  if (shell.includes('zsh')) return 'zsh';
  if (shell.includes('bash')) return 'bash';
  if (shell.includes('fish')) return 'fish';
  if (shell.includes('pwsh') || shell.includes('powershell')) return 'powershell';
  if (process.env.PSModulePath || process.env.PSExecutionPolicyPreference) return 'powershell';
  if (comSpec.includes('cmd.exe')) return 'cmd';
  if (process.platform === 'darwin') return 'zsh';
  if (process.platform === 'win32') return 'powershell';
  return 'bash';
}

function getEnvVarSetupInstructions(envVar) {
  const shell = detectCurrentShell();

  if (shell === 'zsh') {
    return {
      label: 'zsh',
      commands: [
        `echo 'export ${envVar}=your_key_here' >> ~/.zshrc`,
        'source ~/.zshrc',
      ],
    };
  }

  if (shell === 'bash') {
    return {
      label: 'bash',
      commands: [
        `echo 'export ${envVar}=your_key_here' >> ~/.bashrc`,
        'source ~/.bashrc',
      ],
    };
  }

  if (shell === 'fish') {
    return {
      label: 'fish',
      commands: [
        `set -Ux ${envVar} your_key_here`,
      ],
    };
  }

  if (shell === 'cmd') {
    return {
      label: 'cmd.exe',
      commands: [
        `setx ${envVar} "your_key_here"`,
        'Open a new terminal afterwards.',
      ],
    };
  }

  return {
    label: 'PowerShell',
    commands: [
      'if (!(Test-Path $PROFILE)) { New-Item -ItemType File -Path $PROFILE -Force | Out-Null }',
      `Add-Content -Path $PROFILE -Value '$env:${envVar}="your_key_here"'`,
      '. $PROFILE',
    ],
  };
}

function buildEnvVarSetupMessage(envVar) {
  const setup = getEnvVarSetupInstructions(envVar);

  return [
    `Detected shell: ${setup.label}`,
    '',
    ...setup.commands.map(command => `  ${command}`),
  ].join('\n');
}

function getProviderModels(settings, provider) {
  const providerDef = PROVIDER_DEFS[provider];

  if (settings.configuredDefault?.provider === provider) {
    return {
      smallModel: settings.configuredDefault.smallModel,
      bigModel: settings.configuredDefault.bigModel,
    };
  }

  return {
    smallModel: providerDef.defaultSmallModel,
    bigModel: providerDef.defaultBigModel,
  };
}

function getConfiguredDefaultModel(settings) {
  if (!settings.configuredDefault) {
    return MANUAL_VALUE;
  }

  if (settings.configuredDefault.provider === PROVIDER_OPENROUTER) {
    return settings.configuredDefault.smallModel;
  }

  return PROVIDER_DEFS[settings.configuredDefault.provider].choiceValue;
}

function isConfiguredDefaultModel(model, settings) {
  return model !== MANUAL_VALUE && model === getConfiguredDefaultModel(settings);
}

function isOpenRouterModel(model) {
  return !!model && ![MANUAL_VALUE, CLAUDE_CLI, GEMINI_DIRECT, OPENAI_DIRECT].includes(model);
}

function formatModelVariantLabel(model) {
  const friendlyLabels = {
    haiku: 'Haiku',
    sonnet: 'Sonnet',
    'gemini-2.5-flash-lite': 'Flash Lite',
    'gemini-2.5-flash': 'Flash',
    'gemini-2.5-pro': 'Pro',
    'gpt-5.4-nano': 'Nano',
    'gpt-5.4-mini': 'Mini',
    'gpt-5.4': '5.4',
  };

  return friendlyLabels[model] || model;
}

function buildAutoSelectChoiceName(label, smallModel, bigModel) {
  return `${label} (auto-selects ${formatModelVariantLabel(smallModel)} or ${formatModelVariantLabel(bigModel)})`;
}

function buildProviderChoice(provider, settings) {
  const providerDef = PROVIDER_DEFS[provider];
  const { smallModel, bigModel } = getProviderModels(settings, provider);

  return {
    value: providerDef.choiceValue,
    name: buildAutoSelectChoiceName(providerDef.label, smallModel, bigModel),
  };
}

function ensureConfiguredModelChoice(choices, model, allowOpenRouterModels) {
  if (!model || !isOpenRouterModel(model) || !allowOpenRouterModels) {
    return choices;
  }

  if (choices.some(choice => choice.value === model)) {
    return choices;
  }

  const nextChoices = [...choices];
  const separatorIndex = nextChoices.findIndex(choice => choice.type === 'separator');
  const insertAt = separatorIndex === -1 ? nextChoices.length : separatorIndex + 1;
  nextChoices.splice(insertAt, 0, { value: model, name: `${model} (configured)` });
  return nextChoices;
}

async function buildModelChoices(currentModel, allowOpenRouterModels, settings) {
  let choices = [
    { value: MANUAL_VALUE, name: 'Manual (no AI)' },
    buildProviderChoice(PROVIDER_CLAUDE_CLI, settings),
    buildProviderChoice(PROVIDER_GEMINI, settings),
    buildProviderChoice(PROVIDER_OPENAI, settings),
  ];

  if (!allowOpenRouterModels) {
    return ensureConfiguredModelChoice(choices, currentModel, false);
  }

  try {
    const { pinned, rest } = await fetchModels();
    if (pinned.length || rest.length) {
      choices.push({ type: 'separator', line: '-- OpenRouter Models --' });
      choices = choices.concat(pinned, rest);
    }
  } catch {}

  return ensureConfiguredModelChoice(choices, currentModel, true);
}

function buildWarningChoice(warningMessage) {
  const firstLine = warningMessage
    .split('\n')
    .map(line => line.trim())
    .find(Boolean);

  if (!firstLine) {
    return [];
  }

  return [
    {
      name: `Warning: ${firstLine}`,
      value: WARNING_VALUE,
      disabled: true,
    },
    { type: 'separator', line: '------------------------------' },
  ];
}

async function promptForModel(
  cz,
  choices,
  currentModel,
  fallbackModel = MANUAL_VALUE,
  preferFallback = false,
  warningMessage = null
) {
  const displayChoices = warningMessage
    ? buildWarningChoice(warningMessage).concat(choices)
    : choices;
  const currentIndex = displayChoices.findIndex(choice => choice.value === currentModel);
  const fallbackIndex = displayChoices.findIndex(choice => choice.value === fallbackModel);
  const defaultIndex = preferFallback
    ? (fallbackIndex !== -1 ? fallbackIndex : Math.max(currentIndex, 0))
    : (currentIndex !== -1 ? currentIndex : Math.max(fallbackIndex, 0));

  const answer = await cz.prompt([
    {
      type: 'list',
      name: 'model',
      message: 'Model:',
      choices: displayChoices,
      default: defaultIndex,
    },
  ]);

  return answer.model;
}

function getProviderFromModel(model, settings) {
  if (model === CLAUDE_CLI) {
    return PROVIDER_CLAUDE_CLI;
  }

  if (model === GEMINI_DIRECT) {
    return PROVIDER_GEMINI;
  }

  if (model === OPENAI_DIRECT) {
    return PROVIDER_OPENAI;
  }

  if (settings.configuredDefault?.provider === PROVIDER_OPENROUTER && model === settings.configuredDefault.smallModel) {
    return PROVIDER_OPENROUTER;
  }

  if (isOpenRouterModel(model)) {
    return PROVIDER_OPENROUTER;
  }

  return null;
}

function getRequiredEnvVar(model) {
  if (model === GEMINI_DIRECT) {
    return PROVIDER_DEFS[PROVIDER_GEMINI].envVar;
  }

  if (model === OPENAI_DIRECT) {
    return PROVIDER_DEFS[PROVIDER_OPENAI].envVar;
  }

  if (isOpenRouterModel(model)) {
    return PROVIDER_DEFS[PROVIDER_OPENROUTER].envVar;
  }

  return null;
}

function getModelChoiceLabel(model) {
  if (model === MANUAL_VALUE) {
    return 'Manual';
  }

  if (model === CLAUDE_CLI) {
    return PROVIDER_DEFS[PROVIDER_CLAUDE_CLI].label;
  }

  if (model === GEMINI_DIRECT) {
    return PROVIDER_DEFS[PROVIDER_GEMINI].label;
  }

  if (model === OPENAI_DIRECT) {
    return PROVIDER_DEFS[PROVIDER_OPENAI].label;
  }

  return model;
}

function getMissingKeyMessage(model) {
  const envVar = getRequiredEnvVar(model);

  if (!envVar || process.env[envVar]) {
    return null;
  }

  const label = isOpenRouterModel(model)
    ? 'OpenRouter models'
    : getModelChoiceLabel(model);

  return [
    `${label} needs \`${envVar}\` before it can run.`,
    '',
    buildEnvVarSetupMessage(envVar),
  ].join('\n');
}

function resolveExecutionModel(model, largeDiff, settings) {
  const provider = getProviderFromModel(model, settings);

  if (!provider) {
    return model;
  }

  if (provider === PROVIDER_OPENROUTER && model !== getConfiguredDefaultModel(settings)) {
    return model;
  }

  const { smallModel, bigModel } = getProviderModels(settings, provider);
  return largeDiff ? bigModel : smallModel;
}

function getExecutionModelLabel(_selectedModel, executionModel) {
  return formatModelVariantLabel(executionModel);
}

async function getAiSuggestion(stat, diff, motivation, model, settings, executionModel = model) {
  const provider = getProviderFromModel(model, settings);
  const prompt = buildPrompt(stat, diff, motivation);
  const result = await PROVIDER_DEFS[provider].invoke(prompt, executionModel);
  const parsedSuggestion = normalizeAiSuggestion(parseJsonResponse(result));

  if (parsedSuggestion.wasTypeNormalized) {
    console.log(`\n  Warning: AI suggested unknown type; defaulting to "${parsedSuggestion.suggestion.type}"`);
  }

  return parsedSuggestion.suggestion;
}

function getRetryFallbackModel(model) {
  return model === CLAUDE_CLI ? MANUAL_VALUE : CLAUDE_CLI;
}

module.exports = {
  buildModelChoices,
  getAiSuggestion,
  getConfiguredDefaultModel,
  getExecutionModelLabel,
  getMissingKeyMessage,
  getModelChoiceLabel,
  getRetryFallbackModel,
  isConfiguredDefaultModel,
  promptForModel,
  resolveExecutionModel,
};

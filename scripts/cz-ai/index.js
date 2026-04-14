'use strict';

const { execFileSync } = require('child_process');
const fs = require('fs');
const os = require('os');
const path = require('path');
const config = require('../../.commit-config');

const { czCustomizable } = config;
const TYPES = czCustomizable.types;
const VALID_TYPES = TYPES.map(t => t.value);
const SCOPES = czCustomizable.scopes;
const SCOPE_NAMES = SCOPES.map(s => s.name).filter(Boolean);
const DEFAULT_TYPE = VALID_TYPES.includes('chore') ? 'chore' : VALID_TYPES[0];
const MAX_DIFF_CHARS = 12000;
const MAX_BUFFER = 1024 * 1024 * 20;

// Key codes for interactive prompt
const KEY_CTRL_C = 0x03;
const KEY_ENTER = 0x0d;
const KEY_TAB = 0x09;
const KEY_ESC = 0x1b;
const NO_SCOPE = '(none)';

const DEFAULT_MODEL = config.ai?.defaultModel || 'google/gemini-2.5-flash-lite';

// Pinned at the top of the model picker for quick access
const FAVORITE_MODELS = [
  'google/gemini-2.5-flash-lite',
  'openai/gpt-5.4-nano',
  'openai/gpt-5.4-mini',
  'google/gemini-2.5-flash',
  'anthropic/claude-haiku-4.5',
];

// ── Settings loading ──────────────────────────────────────────────

function parseLenientJson(text) {
  const chunks = [];
  let inString = false;

  for (let i = 0; i < text.length; i++) {
    const ch = text[i];

    if (inString) {
      chunks.push(ch);
      if (ch === '\\' && i + 1 < text.length) {
        chunks.push(text[++i]);
      } else if (ch === '"') {
        inString = false;
      }
      continue;
    }

    if (ch === '"') {
      inString = true;
      chunks.push(ch);
    } else if (ch === '/' && text[i + 1] === '/') {
      while (i < text.length && text[i] !== '\n') i++;
      i--; // outer loop will increment
    } else if (ch === '/' && text[i + 1] === '*') {
      i += 2;
      while (i < text.length - 1 && !(text[i] === '*' && text[i + 1] === '/')) i++;
      i++; // skip past '/'
    } else {
      chunks.push(ch);
    }
  }

  const result = chunks.join('').replace(/,(\s*[}\]])/g, '$1');
  return JSON.parse(result);
}

function loadVSCodeSettings() {
  const platformDirs = {
    darwin: path.join(os.homedir(), 'Library', 'Application Support'),
    win32: process.env.APPDATA || '',
  };
  const base = platformDirs[process.platform] ?? path.join(os.homedir(), '.config');
  const settingsPath = path.join(base, 'Code', 'User', 'settings.json');

  try {
    return parseLenientJson(fs.readFileSync(settingsPath, 'utf-8'));
  } catch {
    return {};
  }
}

function resolveSettings() {
  const vscode = loadVSCodeSettings();

  const model =
    process.env.CZ_AI_MODEL ||
    vscode['harry-cz.ai.model'] ||
    DEFAULT_MODEL;

  return {
    model,
    skipModel: vscode['harry-cz.ai.skip-model-choice'] === true,
    largeDiffThreshold: vscode['harry-cz.ai.large-diff-threshold'] ?? LARGE_DIFF_CHARS,
    smallModel: vscode['harry-cz.ai.small-model'] ?? 'google/gemini-2.5-flash-lite',
    largeModel: vscode['harry-cz.ai.large-model'] ?? 'google/gemini-2.5-flash',
    smallCliModel: vscode['harry-cz.ai.small-cli-model'] ?? 'haiku',
    largeCliModel: vscode['harry-cz.ai.large-cli-model'] ?? 'sonnet',
    geminiSmallModel: vscode['harry-cz.ai.gemini-small-model'] ?? 'gemini-2.5-flash',
    geminiLargeModel: vscode['harry-cz.ai.gemini-large-model'] ?? 'gemini-2.5-pro',
    openAiSmallModel: vscode['harry-cz.ai.openai-small-model'] ?? 'gpt-5.4-mini',
    openAiLargeModel: vscode['harry-cz.ai.openai-large-model'] ?? 'gpt-5.4',
  };
}

// ── AI providers ──────────────────────────────────────────────────

const CLAUDE_CLI = '__claude_cli__';
const CLAUDE_CLI_SONNET = '__claude_cli_sonnet__';
const GEMINI_DIRECT = '__gemini__';
const OPENAI_DIRECT = '__openai__';
const MANUAL_VALUE = '__manual__';
const LARGE_DIFF_CHARS = 4000;

const COMMIT_JSON_SCHEMA = {
  type: 'object',
  properties: {
    type: { type: 'string' },
    scope: { type: 'string' },
    subject: { type: 'string' },
    body: { type: 'string' },
    breaking: { type: 'string' },
  },
  required: ['type', 'scope', 'subject', 'body', 'breaking'],
  additionalProperties: false,
};

function callClaudeCli(prompt, cliModel = 'haiku') {
  return execFileSync('claude', ['-p', '--model', cliModel], {
    input: prompt,
    encoding: 'utf-8',
    timeout: 60000,
    maxBuffer: MAX_BUFFER,
  });
}

async function callGemini(prompt, model) {
  const apiKey = process.env.GEMINI_API_KEY;
  const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-goog-api-key': apiKey,
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

  if (!response.ok) {
    const err = await response.text();
    throw new Error(`Gemini API error (${response.status}): ${err.slice(0, 200)}`);
  }

  const data = await response.json();
  const text = data.candidates?.[0]?.content?.parts
    ?.map(part => part.text || '')
    .join('')
    .trim();

  if (!text) {
    throw new Error('Gemini API returned an empty response');
  }

  return text;
}

async function callOpenAi(prompt, model) {
  const apiKey = process.env.OPENAI_API_KEY;
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
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
    }),
  });

  if (!response.ok) {
    const err = await response.text();
    throw new Error(`OpenAI API error (${response.status}): ${err.slice(0, 200)}`);
  }

  const data = await response.json();
  const text = data.choices?.[0]?.message?.content;
  if (!text) {
    throw new Error('OpenAI API returned an empty response');
  }
  return text;
}

async function fetchModels() {
  const res = await fetch('https://openrouter.ai/api/v1/models', {
    headers: { Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}` },
  });
  if (!res.ok) {
    throw new Error(`OpenRouter models API returned ${res.status}`);
  }
  const data = await res.json();
  const all = data.data.filter(m => m.id && m.name);

  const favSet = new Set(FAVORITE_MODELS);
  const pinned = [];
  for (const id of FAVORITE_MODELS) {
    const found = all.find(m => m.id === id);
    if (found) pinned.push({ value: found.id, name: found.name });
  }

  const rest = all
    .filter(m => !favSet.has(m.id))
    .sort((a, b) => a.name.localeCompare(b.name))
    .map(m => ({ value: m.id, name: m.name }));

  return { pinned, rest };
}

async function callOpenRouter(prompt, model) {
  const apiKey = process.env.OPENROUTER_API_KEY;
  const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
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
    }),
  });

  if (!response.ok) {
    const err = await response.text();
    throw new Error(`OpenRouter API error (${response.status}): ${err.slice(0, 200)}`);
  }

  const data = await response.json();
  return data.choices[0].message.content;
}

// ── Diff helpers ──────────────────────────────────────────────────

function getStagedStat() {
  return execFileSync('git', ['diff', '--cached', '--stat'], { encoding: 'utf-8', maxBuffer: MAX_BUFFER }).trim();
}

function getStagedDiff() {
  let diff = execFileSync('git', ['diff', '--cached'], { encoding: 'utf-8', maxBuffer: MAX_BUFFER });

  if (diff.length > MAX_DIFF_CHARS) {
    const lineEnd = diff.lastIndexOf('\n', MAX_DIFF_CHARS);
    diff = diff.slice(0, lineEnd > 0 ? lineEnd : MAX_DIFF_CHARS) + '\n\n... (diff truncated for brevity)';
  }

  return diff;
}

// ── AI suggestion ─────────────────────────────────────────────────

function buildPrompt(stat, diff, motivation) {
  return `You are a commit message generator for Armstrong Edge, a React component library by Rocketmakers.

Analyze the staged diff below and suggest a conventional commit message.

RULES:
- Types: ${VALID_TYPES.join(', ')}
- Scopes: ${SCOPE_NAMES.join(', ')}  (pick one if relevant, or leave empty string — scope is optional)
- Subject: imperative mood, no trailing period, max 200 chars
- Body: 1-3 sentences explaining WHY the change was made and what it affects. Always provide a body — we want detailed changelogs. Leave empty string ONLY for truly trivial changes (typos, formatting)
- "feat" = wholly new feature, "fix" = bug fix, "refactor" = restructure without behaviour change, "chore" = config/deps/tooling
- "WIP" = work in progress (only if the diff looks clearly incomplete)

DIFF STATS:
${stat}

DIFF:
${diff}
${motivation ? `\nAUTHOR'S MOTIVATION / CONTEXT:\n${motivation}\n` : ''}
BREAKING CHANGES:
- If the diff contains breaking changes (dropped support, removed APIs, changed peerDependencies major versions, renamed public exports, changed component prop signatures), set "breaking" to a short description of what breaks
- semantic-release uses "BREAKING CHANGE:" in the commit footer to trigger a major version bump, so getting this right matters

Respond with ONLY valid JSON matching the schema: {type, scope, subject, body, breaking}`;
}

async function getAiSuggestion(stat, diff, motivation, model, settings, providerModel = model) {
  const prompt = buildPrompt(stat, diff, motivation);
  let result;

  if (providerModel === CLAUDE_CLI || providerModel === CLAUDE_CLI_SONNET) {
    const cliModel = providerModel === CLAUDE_CLI_SONNET
      ? (settings?.largeCliModel || 'sonnet')
      : (settings?.smallCliModel || 'haiku');
    result = callClaudeCli(prompt, cliModel);
  } else if (model === GEMINI_DIRECT) {
    result = await callGemini(prompt, providerModel);
  } else if (model === OPENAI_DIRECT) {
    result = await callOpenAi(prompt, providerModel);
  } else {
    result = await callOpenRouter(prompt, providerModel);
  }

  const parsed = parseJsonResponse(result);

  if (!VALID_TYPES.includes(parsed.type)) {
    console.log(`\n  Warning: AI suggested unknown type "${parsed.type}", defaulting to "${DEFAULT_TYPE}"`);
    parsed.type = DEFAULT_TYPE;
  }

  return parsed;
}

// ── Utilities ─────────────────────────────────────────────────────

function parseJsonResponse(text) {
  try {
    return JSON.parse(text);
  } catch {
    const match = text.match(/\{[\s\S]*\}/);
    if (!match) throw new Error('Could not parse AI response: ' + text.slice(0, 200));
    return JSON.parse(match[0]); // let it throw naturally if still invalid
  }
}

function capitalize(str) {
  return str ? str.charAt(0).toUpperCase() + str.slice(1) : str;
}

function formatScope(scope) {
  return scope ? `(${scope})` : '';
}

function waitForKey() {
  return new Promise((resolve, reject) => {
    const { stdin } = process;
    if (!stdin.isTTY) {
      reject(new Error('stdin is not a TTY — cannot read keypress'));
      return;
    }
    const wasRaw = stdin.isRaw ?? false;
    stdin.setRawMode(true);
    stdin.resume();
    stdin.once('data', data => {
      stdin.setRawMode(wasRaw);
      stdin.pause();
      resolve(data[0]);
    });
  });
}

async function waitForValidKey() {
  while (true) {
    const key = await waitForKey();
    if (key === KEY_ESC) return KEY_CTRL_C;
    if (key === KEY_CTRL_C || key === KEY_ENTER || key === KEY_TAB) return key;
    // Ignore non-ASCII keys (arrow keys, function keys, etc.)
  }
}

function buildCommitMessage({ type, scope, subject, body, breaking }) {
  let msg = `${type}${formatScope(scope)}: ${capitalize(subject)}`;
  if (body) msg += `\n\n${body}`;
  if (breaking) msg += `\n\nBREAKING CHANGE: ${breaking}`;
  return msg;
}

function isSpecialModel(value) {
  return [
    MANUAL_VALUE,
    CLAUDE_CLI,
    CLAUDE_CLI_SONNET,
    GEMINI_DIRECT,
    OPENAI_DIRECT,
  ].includes(value);
}

function isOpenRouterModel(value) {
  return !!value && !isSpecialModel(value);
}

function getModelChoiceLabel(value) {
  if (value === MANUAL_VALUE) return 'Manual';
  if (value === CLAUDE_CLI || value === CLAUDE_CLI_SONNET) return 'Claude CLI';
  if (value === GEMINI_DIRECT) return 'Gemini';
  if (value === OPENAI_DIRECT) return 'OpenAI';
  return value;
}

function formatModelVariantLabel(model) {
  const friendlyLabels = {
    'haiku': 'Haiku',
    'sonnet': 'Sonnet',
    'gemini-2.5-flash-lite': 'Flash Lite',
    'gemini-2.5-flash': 'Flash',
    'gemini-2.5-pro': 'Pro',
    'gpt-5.4-nano': 'Nano',
    'gpt-5.4-mini': 'Mini',
    'gpt-5.4': '5.4',
  };

  if (friendlyLabels[model]) {
    return friendlyLabels[model];
  }

  return model;
}

function buildAutoSelectChoiceName(label, smallModel, largeModel) {
  return `${label} (auto-selects ${formatModelVariantLabel(smallModel)} or ${formatModelVariantLabel(largeModel)})`;
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
      `if (!(Test-Path $PROFILE)) { New-Item -ItemType File -Path $PROFILE -Force | Out-Null }`,
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

function getMissingKeyMessage(model) {
  if (model === GEMINI_DIRECT && !process.env.GEMINI_API_KEY) {
    return [
      'Gemini needs `GEMINI_API_KEY` before it can run.',
      '',
      buildEnvVarSetupMessage('GEMINI_API_KEY'),
    ].join('\n');
  }

  if (model === OPENAI_DIRECT && !process.env.OPENAI_API_KEY) {
    return [
      'OpenAI needs `OPENAI_API_KEY` before it can run.',
      '',
      buildEnvVarSetupMessage('OPENAI_API_KEY'),
    ].join('\n');
  }

  if (isOpenRouterModel(model) && !process.env.OPENROUTER_API_KEY) {
    return [
      'OpenRouter models need `OPENROUTER_API_KEY` before they can run.',
      '',
      buildEnvVarSetupMessage('OPENROUTER_API_KEY'),
    ].join('\n');
  }

  return null;
}

function resolveExecutionModel(model, largeDiff, settings) {
  if (model === CLAUDE_CLI && largeDiff) return CLAUDE_CLI_SONNET;
  if (model === GEMINI_DIRECT) return largeDiff ? settings.geminiLargeModel : settings.geminiSmallModel;
  if (model === OPENAI_DIRECT) return largeDiff ? settings.openAiLargeModel : settings.openAiSmallModel;
  if (model === settings.smallModel && largeDiff) return settings.largeModel;
  return model;
}

function getExecutionModelLabel(model) {
  if (model === CLAUDE_CLI) return 'Haiku';
  if (model === CLAUDE_CLI_SONNET) return 'Sonnet';
  return formatModelVariantLabel(model);
}

function ensureConfiguredModelChoice(choices, model, allowOpenRouterModels) {
  if (!model || isSpecialModel(model)) return choices;
  if (!allowOpenRouterModels) return choices;
  if (choices.some(choice => choice.value === model)) return choices;

  const next = [...choices];
  const separatorIdx = next.findIndex(choice => choice.type === 'separator');
  const insertAt = separatorIdx === -1 ? next.length : separatorIdx + 1;
  next.splice(insertAt, 0, { value: model, name: `${model} (configured)` });
  return next;
}

async function buildModelChoices(currentModel, allowOpenRouterModels, settings) {
  let choices = [
    { value: MANUAL_VALUE, name: 'Manual (no AI)' },
    {
      value: CLAUDE_CLI,
      name: buildAutoSelectChoiceName('Claude CLI', settings.smallCliModel, settings.largeCliModel),
    },
    {
      value: GEMINI_DIRECT,
      name: buildAutoSelectChoiceName('Gemini', settings.geminiSmallModel, settings.geminiLargeModel),
    },
    {
      value: OPENAI_DIRECT,
      name: buildAutoSelectChoiceName('OpenAI', settings.openAiSmallModel, settings.openAiLargeModel),
    },
  ];

  if (!allowOpenRouterModels) {
    return ensureConfiguredModelChoice(choices, currentModel, false);
  }

  try {
    const { pinned, rest } = await fetchModels();
    if (pinned.length || rest.length) {
      choices.push({ type: 'separator', line: '── Open Router Models ──' });
      choices.push(...pinned);
      choices.push(...rest);
    }
  } catch {}

  return ensureConfiguredModelChoice(choices, currentModel, true);
}

async function promptForModel(cz, choices, currentModel, fallbackModel = CLAUDE_CLI, preferFallback = false) {
  const currentIdx = choices.findIndex(choice => choice.value === currentModel);
  const fallbackIdx = choices.findIndex(choice => choice.value === fallbackModel);
  const defaultIdx = preferFallback
    ? (fallbackIdx !== -1 ? fallbackIdx : Math.max(currentIdx, 0))
    : (currentIdx !== -1 ? currentIdx : Math.max(fallbackIdx, 0));

  const answer = await cz.prompt([
    {
      type: 'list',
      name: 'model',
      message: 'Model:',
      choices,
      default: defaultIdx,
    },
  ]);

  return answer.model;
}

async function manualCommit(cz, commit, { type, scope, subject, body, breaking }) {
  const breakingAllowed = czCustomizable.allowBreakingChanges.includes(type);

  const prompts = [
    {
      type: 'input',
      name: 'subject',
      message: 'Write a short, imperative tense description of the change (max 200 chars):',
      default: subject || undefined,
      validate: input => input.trim() ? true : 'Subject is required.',
    },
    {
      type: 'input',
      name: 'body',
      message: 'Provide a longer description of the change (press Enter to skip):',
      default: body || undefined,
    },
  ];

  if (breakingAllowed) {
    prompts.push({
      type: 'input',
      name: 'breaking',
      message: 'List any BREAKING CHANGES (press Enter to skip):',
      default: breaking || undefined,
    });
  }

  const answers = await cz.prompt(prompts);

  const finalSubject = answers.subject.trim();
  if (!finalSubject) {
    console.log('\n  Empty subject. Aborting commit.\n');
    return;
  }

  commit(buildCommitMessage({
    type,
    scope,
    subject: finalSubject,
    body: (answers.body || '').trim(),
    breaking: (answers.breaking || '').trim(),
  }));
}

// ── Main prompter ─────────────────────────────────────────────────

module.exports = {
  async prompter(cz, commit) {
    const stat = getStagedStat();
    if (!stat) {
      console.log('\n  No staged changes. Run `git add` first.\n');
      return;
    }

    // Headless mode — caller provides commit parts via env vars
    if (process.env.CZ_AI_HEADLESS === '1') {
      const type = process.env.CZ_AI_TYPE || '';
      const scope = process.env.CZ_AI_SCOPE || '';
      const subject = process.env.CZ_AI_SUBJECT || '';
      const body = process.env.CZ_AI_BODY || '';
      const breaking = process.env.CZ_AI_BREAKING || '';

      if (!subject) {
        // No subject provided — print conventions as JSON so the consumer AI
        // can learn the rules, then call again with the right env vars.
        console.log(JSON.stringify({
          instructions: [
            'Set the following env vars and re-run with CZ_AI_HEADLESS=1:',
            '  CZ_AI_TYPE     — commit type (required)',
            '  CZ_AI_SCOPE    — scope (optional, empty string if none)',
            '  CZ_AI_SUBJECT  — subject line (required, imperative mood, no trailing period, max 200 chars)',
            '  CZ_AI_BODY     — body (optional, 1-3 sentences explaining WHY the change was made)',
            '  CZ_AI_BREAKING — breaking change description (optional, empty string if none)',
          ],
          validTypes: VALID_TYPES,
          typeDescriptions: {
            feat: 'wholly new feature',
            fix: 'bug fix',
            refactor: 'restructure without behaviour change',
            chore: 'config/deps/tooling',
            WIP: 'work in progress (only if the diff looks clearly incomplete)',
          },
          validScopes: SCOPE_NAMES,
          breakingChangeGuidance: [
            'Set CZ_AI_BREAKING if the diff contains: dropped support, removed APIs,',
            'changed peerDependencies major versions, renamed public exports,',
            'or changed component prop signatures.',
            'semantic-release uses "BREAKING CHANGE:" in the commit footer to trigger a major version bump.',
          ],
          stagedFiles: stat,
        }, null, 2));
        return;
      }

      // Strict validation — reject rather than silently fix
      const errors = [];

      if (!type) {
        errors.push(`CZ_AI_TYPE is required. Valid types: ${VALID_TYPES.join(', ')}`);
      } else if (!VALID_TYPES.includes(type)) {
        errors.push(`CZ_AI_TYPE "${type}" is not valid. Valid types: ${VALID_TYPES.join(', ')}`);
      }

      if (scope && !SCOPE_NAMES.includes(scope)) {
        errors.push(`CZ_AI_SCOPE "${scope}" is not valid. Valid scopes: ${SCOPE_NAMES.join(', ')} (or empty string for no scope)`);
      }

      if (subject.length > 200) {
        errors.push(`CZ_AI_SUBJECT exceeds 200 chars (got ${subject.length}). Shorten it.`);
      }

      if (subject.endsWith('.')) {
        errors.push('CZ_AI_SUBJECT must not end with a period.');
      }

      if (subject.includes('\n')) {
        errors.push('CZ_AI_SUBJECT must be a single line. Use CZ_AI_BODY for additional detail.');
      }

      if (errors.length) {
        console.log(JSON.stringify({ errors }, null, 2));
        return;
      }

      const msg = buildCommitMessage({ type, scope, subject, body, breaking });
      console.log(`\n  Headless mode — committing: ${type}${formatScope(scope)}: ${subject}\n`);
      commit(msg);
      return;
    }

    const hasOpenRouterKey = !!process.env.OPENROUTER_API_KEY;
    const settings = resolveSettings();

    let model = settings.model;
    let modelChoices = null;
    async function getModelChoices() {
      if (!modelChoices) {
        modelChoices = await buildModelChoices(settings.model, hasOpenRouterKey, settings);
      }
      return modelChoices;
    }

    if (!settings.skipModel) {
      model = await promptForModel(cz, await getModelChoices(), MANUAL_VALUE);
    } else {
      console.log(`\n  Model: ${getModelChoiceLabel(model)} (from settings)\n`);
    }

    while (true) {
      if (model === MANUAL_VALUE) {
        return promptForCommit(cz, commit, null);
      }

      const missingKeyMessage = getMissingKeyMessage(model);
      if (!missingKeyMessage) break;

      console.log(`\n  ⚠ ${missingKeyMessage}\n`);
      model = await promptForModel(cz, await getModelChoices(), model, CLAUDE_CLI, true);
    }

    // AI path — ask for motivation then generate
    const diff = getStagedDiff();
    const largeDiff = diff.length > settings.largeDiffThreshold;

    const { motivation } = await cz.prompt([
      {
        type: 'input',
        name: 'motivation',
        message: 'Motivation / context for these changes (optional, press Enter to skip):',
      },
    ]);

    let ai = null;
    while (!ai) {
      if (model === MANUAL_VALUE) {
        return promptForCommit(cz, commit, null);
      }

      const missingKeyMessage = getMissingKeyMessage(model);
      if (missingKeyMessage) {
        console.log(`\n  ⚠ ${missingKeyMessage}\n`);
        model = await promptForModel(cz, await getModelChoices(), model, CLAUDE_CLI, true);
        continue;
      }

      const executionModel = resolveExecutionModel(model, largeDiff, settings);
      process.stdout.write(`  Generating AI suggestion (${getExecutionModelLabel(executionModel)})...`);
      try {
        ai = await getAiSuggestion(stat, diff, motivation, model, settings, executionModel);
        console.log(` done!\n\n  Suggestion: ${ai.type}${formatScope(ai.scope)}: ${ai.subject}\n`);
      } catch (err) {
        console.log(` failed.\n\n  ⚠ ${err.message}\n`);
        model = await promptForModel(
          cz,
          await getModelChoices(),
          model,
          getModelChoiceLabel(model) === 'Claude CLI' ? MANUAL_VALUE : CLAUDE_CLI,
          true
        );
      }
    }

    return promptForCommit(cz, commit, ai);
  },
};

// ── Commit flow ───────────────────────────────────────────────────

async function promptForCommit(cz, commit, ai) {
  const defaultTypeIdx = ai ? Math.max(TYPES.findIndex(t => t.value === ai.type), 0) : 0;
  const scopeChoices = SCOPES.map(s => s.name || NO_SCOPE);
  const defaultScopeIdx = ai ? Math.max(scopeChoices.findIndex(s => s === ai.scope), 0) : 0;

  const answers = await cz.prompt([
    {
      type: 'list',
      name: 'type',
      message: "Select the type of change that you're committing:",
      choices: TYPES,
      default: defaultTypeIdx,
    },
    {
      type: 'list',
      name: 'scope',
      message: 'What is the scope of this change (e.g. component or file name):',
      choices: scopeChoices,
      default: defaultScopeIdx,
    },
  ]);

  const scope = answers.scope === NO_SCOPE ? '' : answers.scope;
  const msg = { type: answers.type, scope, subject: '', body: '', breaking: '' };

  if (!ai) {
    return manualCommit(cz, commit, msg);
  }

  msg.subject = capitalize(ai.subject);
  msg.body = ai.body || '';
  msg.breaking = ai.breaking || '';

  const scopePart = formatScope(scope);
  console.log('\n  ┌─────────────────────────────────────────────');
  console.log(`  │ ${msg.type}${scopePart}: ${msg.subject}`);
  if (msg.body) {
    console.log('  │');
    msg.body.split('\n').forEach(line => console.log(`  │ ${line}`));
  }
  if (msg.breaking) {
    console.log('  │');
    console.log(`  │ BREAKING CHANGE: ${msg.breaking}`);
  }
  console.log('  └─────────────────────────────────────────────');
  console.log('\n  Enter = accept  |  Tab = edit  |  Ctrl+C = abort\n');

  const key = await waitForValidKey();

  if (key === KEY_CTRL_C) {
    console.log('\n  Aborted.\n');
    return;
  }

  if (key === KEY_TAB) {
    return manualCommit(cz, commit, msg);
  }

  commit(buildCommitMessage(msg));
}

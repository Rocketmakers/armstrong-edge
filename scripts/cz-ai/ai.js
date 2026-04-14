"use strict";

const { execFileSync } = require("child_process");

const {
  CLAUDE_CLI,
  COMMIT_JSON_SCHEMA,
  GEMINI_DIRECT,
  MANUAL_VALUE,
  MAX_BUFFER,
  OPENAI_DIRECT,
  OPENROUTER_DIRECT,
  PROVIDER_CLAUDE_CLI,
  PROVIDER_GEMINI,
  PROVIDER_OPENAI,
  PROVIDER_OPENROUTER,
} = require("./shared");
const {
  buildPrompt,
  normalizeAiSuggestion,
  parseJsonResponse,
} = require("./commit");

const OPENROUTER_MODEL_PREFIX = "__openrouter_model__:";
const OPENROUTER_BACK_VALUE = "__openrouter_back__";

const PROVIDER_DEFS = {
  [PROVIDER_CLAUDE_CLI]: {
    choiceValue: CLAUDE_CLI,
    defaultSmallModel: "haiku",
    defaultBigModel: "sonnet",
    envVar: null,
    label: "Claude CLI",
    invoke: (prompt, model) => callClaudeCli(prompt, model),
  },
  [PROVIDER_GEMINI]: {
    choiceValue: GEMINI_DIRECT,
    defaultSmallModel: "gemini-2.5-flash",
    defaultBigModel: "gemini-2.5-pro",
    envVar: "GEMINI_API_KEY",
    label: "Gemini",
    invoke: (prompt, model) => callGemini(prompt, model),
  },
  [PROVIDER_OPENAI]: {
    choiceValue: OPENAI_DIRECT,
    defaultSmallModel: "gpt-5.4-mini",
    defaultBigModel: "gpt-5.4",
    envVar: "OPENAI_API_KEY",
    label: "OpenAI",
    invoke: (prompt, model) => callOpenAi(prompt, model),
  },
  [PROVIDER_OPENROUTER]: {
    choiceValue: OPENROUTER_DIRECT,
    defaultSmallModel: "openrouter/auto",
    defaultBigModel: "openrouter/auto",
    envVar: "OPENROUTER_API_KEY",
    label: "OpenRouter",
    invoke: (prompt, model) => callOpenRouter(prompt, model),
  },
};

let openRouterModelChoicesPromise = null;

function callClaudeCli(prompt, cliModel) {
  return execFileSync("claude", ["-p", "--model", cliModel], {
    input: prompt,
    encoding: "utf-8",
    timeout: 60000,
    maxBuffer: MAX_BUFFER,
  });
}

async function callGemini(prompt, model) {
  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": process.env.GEMINI_API_KEY,
      },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 0.3,
          responseMimeType: "application/json",
          responseJsonSchema: COMMIT_JSON_SCHEMA,
        },
      }),
    },
  );

  return extractResponseText(response, "Gemini API", (data) =>
    data.candidates?.[0]?.content?.parts
      ?.map((part) => part.text || "")
      .join("")
      .trim(),
  );
}

async function callOpenAi(prompt, model) {
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify(buildChatCompletionPayload(prompt, model)),
  });

  return extractResponseText(
    response,
    "OpenAI API",
    (data) => data.choices?.[0]?.message?.content,
  );
}

async function callOpenRouter(prompt, model) {
  const response = await fetch(
    "https://openrouter.ai/api/v1/chat/completions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
      },
      body: JSON.stringify(buildChatCompletionPayload(prompt, model)),
    },
  );

  return extractResponseText(
    response,
    "OpenRouter API",
    (data) => data.choices?.[0]?.message?.content,
  );
}

function buildChatCompletionPayload(prompt, model) {
  return {
    model,
    messages: [{ role: "user", content: prompt }],
    temperature: 0.3,
    response_format: {
      type: "json_schema",
      json_schema: {
        name: "commit_message",
        strict: true,
        schema: COMMIT_JSON_SCHEMA,
      },
    },
  };
}

async function extractResponseText(response, sourceLabel, pickText) {
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      `${sourceLabel} error (${response.status}): ${errorText.slice(0, 200)}`,
    );
  }

  const data = await response.json();
  const text = pickText(data);

  if (!text) {
    throw new Error(`${sourceLabel} returned an empty response`);
  }

  return text;
}

function getProviderModels(settings, provider) {
  const providerDef = PROVIDER_DEFS[provider];
  const override =
    settings.defaultProvider?.provider === provider
      ? settings.defaultProvider
      : null;

  return {
    smallModel: override?.smallModel || providerDef.defaultSmallModel,
    bigModel: override?.bigModel || providerDef.defaultBigModel,
  };
}

function encodeOpenRouterModelChoice(modelId) {
  return `${OPENROUTER_MODEL_PREFIX}${modelId}`;
}

function decodeOpenRouterModelChoice(model) {
  if (typeof model !== "string" || !model.startsWith(OPENROUTER_MODEL_PREFIX)) {
    return null;
  }

  return model.slice(OPENROUTER_MODEL_PREFIX.length);
}

function isOpenRouterModelChoice(model) {
  return decodeOpenRouterModelChoice(model) !== null;
}

function getProviderFromChoice(model) {
  if (model === MANUAL_VALUE) {
    return null;
  }

  if (isOpenRouterModelChoice(model)) {
    return PROVIDER_OPENROUTER;
  }

  return (
    Object.keys(PROVIDER_DEFS).find(
      (provider) => PROVIDER_DEFS[provider].choiceValue === model,
    ) || null
  );
}

function getDefaultModelChoice(settings) {
  if (!settings.defaultProvider) {
    return MANUAL_VALUE;
  }

  if (settings.defaultProvider.provider === PROVIDER_OPENROUTER) {
    const configuredModel =
      settings.defaultProvider.smallModel || settings.defaultProvider.bigModel;
    return configuredModel
      ? encodeOpenRouterModelChoice(configuredModel)
      : OPENROUTER_DIRECT;
  }

  return PROVIDER_DEFS[settings.defaultProvider.provider].choiceValue;
}

function formatModelVariantLabel(model) {
  const friendlyLabels = {
    haiku: "Haiku",
    sonnet: "Sonnet",
    "gemini-2.5-flash-lite": "Flash Lite",
    "gemini-2.5-flash": "Flash",
    "gemini-2.5-pro": "Pro",
    "gpt-5.4-nano": "Nano",
    "gpt-5.4-mini": "Mini",
    "gpt-5.4": "5.4",
  };

  return friendlyLabels[model] || model;
}

function buildAutoSelectChoiceName(label, smallModel, bigModel) {
  return `${label} (auto-selects ${formatModelVariantLabel(smallModel)} or ${formatModelVariantLabel(bigModel)})`;
}

function buildProviderChoice(provider, settings) {
  const providerDef = PROVIDER_DEFS[provider];

  if (provider === PROVIDER_OPENROUTER) {
    return {
      value: providerDef.choiceValue,
      name: `${providerDef.label} (choose any model)`,
    };
  }

  const { smallModel, bigModel } = getProviderModels(settings, provider);

  return {
    value: providerDef.choiceValue,
    name: buildAutoSelectChoiceName(providerDef.label, smallModel, bigModel),
  };
}

function buildModelChoices(settings) {
  return [
    { value: MANUAL_VALUE, name: "Manual (no AI)" },
    buildProviderChoice(PROVIDER_CLAUDE_CLI, settings),
    buildProviderChoice(PROVIDER_GEMINI, settings),
    buildProviderChoice(PROVIDER_OPENAI, settings),
    buildProviderChoice(PROVIDER_OPENROUTER, settings),
  ];
}

async function promptForModel(cz, choices, currentModel = MANUAL_VALUE) {
  const normalizedCurrentModel = isOpenRouterModelChoice(currentModel)
    ? OPENROUTER_DIRECT
    : currentModel;
  const defaultIndex = Math.max(
    choices.findIndex((choice) => choice.value === normalizedCurrentModel),
    0,
  );
  const answer = await cz.prompt([
    {
      type: "list",
      name: "model",
      message: "Model:",
      choices,
      default: defaultIndex,
    },
  ]);

  if (answer.model === OPENROUTER_DIRECT) {
    const selectedOpenRouterModel = await promptForOpenRouterModel(
      cz,
      currentModel,
    );

    if (selectedOpenRouterModel === OPENROUTER_BACK_VALUE) {
      return promptForModel(cz, choices, currentModel);
    }

    return selectedOpenRouterModel;
  }

  return answer.model;
}

async function promptForOpenRouterModel(cz, currentModel) {
  const currentOpenRouterModel = decodeOpenRouterModelChoice(currentModel);
  const choices = await getOpenRouterModelChoices();
  const promptChoices = [
    { value: OPENROUTER_BACK_VALUE, name: "Back" },
    ...choices,
  ];
  const defaultChoice = currentOpenRouterModel
    ? encodeOpenRouterModelChoice(currentOpenRouterModel)
    : promptChoices[1]?.value;
  const defaultIndex = Math.max(
    promptChoices.findIndex((choice) => choice.value === defaultChoice),
    0,
  );
  const answer = await cz.prompt([
    {
      type: "list",
      name: "openRouterModel",
      message: "OpenRouter model:",
      choices: promptChoices,
      default: defaultIndex,
      pageSize: 20,
    },
  ]);

  if (answer.openRouterModel === OPENROUTER_BACK_VALUE) {
    return OPENROUTER_BACK_VALUE;
  }

  return answer.openRouterModel;
}

async function getOpenRouterModelChoices() {
  if (!openRouterModelChoicesPromise) {
    openRouterModelChoicesPromise = fetchOpenRouterModelChoices().catch(
      (error) => {
        openRouterModelChoicesPromise = null;
        throw error;
      },
    );
  }

  return openRouterModelChoicesPromise;
}

async function fetchOpenRouterModelChoices() {
  const response = await fetch("https://openrouter.ai/api/v1/models");

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      `OpenRouter models error (${response.status}): ${errorText.slice(0, 200)}`,
    );
  }

  const data = await response.json();
  const models = Array.isArray(data?.data) ? data.data : [];

  return models
    .filter((model) => model && typeof model.id === "string" && model.id.trim())
    .map((model) => ({
      value: encodeOpenRouterModelChoice(model.id),
      name: buildOpenRouterModelChoiceName(model),
    }))
    .sort((left, right) => left.name.localeCompare(right.name));
}

function buildOpenRouterModelChoiceName(model) {
  const primaryName =
    typeof model.name === "string" && model.name.trim()
      ? model.name.trim()
      : model.id;
  return `${primaryName} (${model.id})`;
}

function getRequiredEnvVar(model) {
  const provider = getProviderFromChoice(model);
  return provider ? PROVIDER_DEFS[provider].envVar : null;
}

function getModelChoiceLabel(model) {
  if (model === MANUAL_VALUE) {
    return "Manual";
  }

  const openRouterModel = decodeOpenRouterModelChoice(model);
  if (openRouterModel) {
    return `OpenRouter (${openRouterModel})`;
  }

  const provider = getProviderFromChoice(model);
  return provider ? PROVIDER_DEFS[provider].label : model;
}

function getMissingKeyMessage(model) {
  const envVar = getRequiredEnvVar(model);

  if (!envVar || process.env[envVar]) {
    return null;
  }

  return `${getModelChoiceLabel(model)} needs \`${envVar}\` before it can run.\n\n  export ${envVar}=your_key_here`;
}

function resolveExecutionModel(model, largeDiff, settings) {
  const openRouterModel = decodeOpenRouterModelChoice(model);
  if (openRouterModel) {
    return openRouterModel;
  }

  const provider = getProviderFromChoice(model);

  if (!provider) {
    return null;
  }

  const { smallModel, bigModel } = getProviderModels(settings, provider);
  return largeDiff ? bigModel : smallModel;
}

function getExecutionModelLabel(_selectedModel, executionModel) {
  return formatModelVariantLabel(executionModel);
}

async function getAiSuggestion(
  stat,
  diff,
  motivation,
  model,
  settings,
  executionModel = null,
) {
  const provider = getProviderFromChoice(model);

  if (!provider) {
    throw new Error("Cannot generate an AI suggestion in manual mode.");
  }

  const prompt = buildPrompt(stat, diff, motivation);
  const result = await PROVIDER_DEFS[provider].invoke(
    prompt,
    executionModel || resolveExecutionModel(model, false, settings),
  );
  const parsedSuggestion = normalizeAiSuggestion(parseJsonResponse(result));

  if (parsedSuggestion.wasTypeNormalized) {
    console.log(
      `\n  Warning: AI suggested unknown type; defaulting to "${parsedSuggestion.suggestion.type}"`,
    );
  }

  return parsedSuggestion.suggestion;
}

module.exports = {
  buildModelChoices,
  buildOpenRouterModelChoiceName,
  decodeOpenRouterModelChoice,
  encodeOpenRouterModelChoice,
  getAiSuggestion,
  getDefaultModelChoice,
  getExecutionModelLabel,
  getMissingKeyMessage,
  getModelChoiceLabel,
  promptForModel,
  resolveExecutionModel,
};

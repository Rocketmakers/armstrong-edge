"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");

const {
  buildModelChoices,
  buildOpenRouterModelChoiceName,
  decodeOpenRouterModelChoice,
  encodeOpenRouterModelChoice,
  getDefaultModelChoice,
  getMissingKeyMessage,
  resolveExecutionModel,
} = require("./ai");
const { MANUAL_VALUE, OPENAI_DIRECT, OPENROUTER_DIRECT } = require("./shared");

function withEnv(overrides, callback) {
  const original = {};
  const keys = Object.keys(overrides);

  keys.forEach((key) => {
    original[key] = process.env[key];
    const value = overrides[key];

    if (value === null) {
      delete process.env[key];
    } else {
      process.env[key] = value;
    }
  });

  try {
    return callback();
  } finally {
    keys.forEach((key) => {
      if (original[key] === undefined) {
        delete process.env[key];
      } else {
        process.env[key] = original[key];
      }
    });
  }
}

test("getDefaultModelChoice falls back to manual when no default provider is configured", () => {
  const model = getDefaultModelChoice({
    defaultProvider: null,
  });

  assert.equal(model, MANUAL_VALUE);
});

test("buildModelChoices reflects provider-specific overrides", () => {
  const choices = buildModelChoices({
    defaultProvider: {
      provider: "openai",
      smallModel: "gpt-5.4-nano",
      bigModel: "gpt-5.4",
    },
  });

  const openAiChoice = choices.find((choice) => choice.value === OPENAI_DIRECT);
  assert.match(openAiChoice.name, /Nano/);
  assert.match(openAiChoice.name, /5\.4/);
});

test("buildModelChoices shows OpenRouter as an explicit picker", () => {
  const choices = buildModelChoices({
    defaultProvider: null,
  });

  const openRouterChoice = choices.find(
    (choice) => choice.value === OPENROUTER_DIRECT,
  );
  assert.equal(openRouterChoice.name, "OpenRouter (choose any model)");
});

test("resolveExecutionModel uses provider overrides for the configured default provider", () => {
  const settings = {
    defaultProvider: {
      provider: "openrouter",
      smallModel: "openrouter/small",
      bigModel: "openrouter/big",
    },
  };

  assert.equal(
    resolveExecutionModel(OPENROUTER_DIRECT, false, settings),
    "openrouter/small",
  );
  assert.equal(
    resolveExecutionModel(OPENROUTER_DIRECT, true, settings),
    "openrouter/big",
  );
});

test("getDefaultModelChoice preserves an explicit OpenRouter model override", () => {
  const model = getDefaultModelChoice({
    defaultProvider: {
      provider: "openrouter",
      smallModel: "anthropic/claude-sonnet-4.5",
      bigModel: "openrouter/auto",
    },
  });

  assert.equal(
    model,
    encodeOpenRouterModelChoice("anthropic/claude-sonnet-4.5"),
  );
  assert.equal(
    decodeOpenRouterModelChoice(model),
    "anthropic/claude-sonnet-4.5",
  );
});

test("resolveExecutionModel returns the selected explicit OpenRouter model", () => {
  const selectedModel = encodeOpenRouterModelChoice("openai/gpt-5.4");

  assert.equal(
    resolveExecutionModel(selectedModel, false, { defaultProvider: null }),
    "openai/gpt-5.4",
  );
  assert.equal(
    resolveExecutionModel(selectedModel, true, { defaultProvider: null }),
    "openai/gpt-5.4",
  );
});

test("buildOpenRouterModelChoiceName includes the model id", () => {
  assert.equal(
    buildOpenRouterModelChoiceName({
      id: "openai/gpt-5.4",
      name: "OpenAI: GPT-5.4",
    }),
    "OpenAI: GPT-5.4 (openai/gpt-5.4)",
  );
});

test("getMissingKeyMessage reports missing provider keys", () => {
  const message = withEnv(
    {
      OPENAI_API_KEY: null,
    },
    () => getMissingKeyMessage(OPENAI_DIRECT),
  );

  assert.match(message, /OPENAI_API_KEY/);
  assert.match(message, /OpenAI needs/);
});

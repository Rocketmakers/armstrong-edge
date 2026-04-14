'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');

const { resolveSettings } = require('./settings');

function withEnv(overrides, callback) {
  const original = {};
  const keys = Object.keys(overrides);

  keys.forEach(key => {
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
    keys.forEach(key => {
      if (original[key] === undefined) {
        delete process.env[key];
      } else {
        process.env[key] = original[key];
      }
    });
  }
}

test('resolveSettings reads env-driven defaults', () => {
  const settings = withEnv({
    CZ_AI_PROVIDER: 'OpenAI',
    CZ_AI_SMALL_MODEL: 'gpt-5.4-nano',
    CZ_AI_BIG_MODEL: 'gpt-5.4',
    CZ_AI_SKIP_MODEL_SELECTION: '1',
    CZ_AI_LARGE_DIFF_THRESHOLD: '6000',
  }, () => resolveSettings());

  assert.deepEqual(settings, {
    defaultProvider: {
      provider: 'openai',
      smallModel: 'gpt-5.4-nano',
      bigModel: 'gpt-5.4',
    },
    largeDiffThreshold: 6000,
    skipModelSelection: true,
    warnings: [],
  });
});

test('resolveSettings warns when model overrides are provided without a provider', () => {
  const settings = withEnv({
    CZ_AI_PROVIDER: null,
    CZ_AI_SMALL_MODEL: 'gpt-5.4-mini',
    CZ_AI_BIG_MODEL: 'gpt-5.4',
    CZ_AI_SKIP_MODEL_SELECTION: null,
    CZ_AI_LARGE_DIFF_THRESHOLD: null,
  }, () => resolveSettings());

  assert.equal(settings.defaultProvider, null);
  assert.deepEqual(settings.warnings, [
    'Ignoring CZ_AI_SMALL_MODEL and CZ_AI_BIG_MODEL because CZ_AI_PROVIDER is not set.',
  ]);
});

test('resolveSettings ignores unsupported providers', () => {
  const settings = withEnv({
    CZ_AI_PROVIDER: 'anthropic',
    CZ_AI_SMALL_MODEL: null,
    CZ_AI_BIG_MODEL: null,
  }, () => resolveSettings());

  assert.equal(settings.defaultProvider, null);
  assert.deepEqual(settings.warnings, [
    'Ignoring unsupported CZ_AI_PROVIDER "anthropic". Use claude-cli, gemini, openai, openrouter.',
  ]);
});

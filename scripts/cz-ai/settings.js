'use strict';

const fs = require('fs');
const os = require('os');
const path = require('path');

const {
  DEFAULT_LARGE_DIFF_THRESHOLD,
  SUPPORTED_PROVIDERS,
} = require('./shared');

const SETTINGS_KEYS = {
  provider: 'harry-cz.ai.provider',
  smallModel: 'harry-cz.ai.small-model',
  bigModel: 'harry-cz.ai.big-model',
  largeDiffThreshold: 'harry-cz.ai.large-diff-threshold',
  skipDefaultModelSelection: 'harry-cz.ai.skip-default-model-selection',
  legacySkipModelChoice: 'harry-cz.ai.skip-model-choice',
};

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
      i--;
    } else if (ch === '/' && text[i + 1] === '*') {
      i += 2;
      while (i < text.length - 1 && !(text[i] === '*' && text[i + 1] === '/')) i++;
      i++;
    } else {
      chunks.push(ch);
    }
  }

  return JSON.parse(chunks.join('').replace(/,(\s*[}\]])/g, '$1'));
}

function loadVSCodeSettings() {
  const baseByPlatform = {
    darwin: path.join(os.homedir(), 'Library', 'Application Support'),
    win32: process.env.APPDATA || '',
  };
  const baseDir = baseByPlatform[process.platform] ?? path.join(os.homedir(), '.config');
  const settingsPath = path.join(baseDir, 'Code', 'User', 'settings.json');

  try {
    return parseLenientJson(fs.readFileSync(settingsPath, 'utf-8'));
  } catch {
    return {};
  }
}

function readSettingString(settings, key) {
  if (typeof settings[key] !== 'string') {
    return '';
  }

  return settings[key].trim();
}

function resolveConfiguredDefault(providerRaw, smallModel, bigModel) {
  if (!providerRaw && !smallModel && !bigModel) {
    return { configuredDefault: null, configuredDefaultWarning: null };
  }

  if (!providerRaw || !smallModel || !bigModel) {
    return {
      configuredDefault: null,
      configuredDefaultWarning: 'Configured default is incomplete. Set provider, smallModel, and bigModel to use it.',
    };
  }

  const provider = providerRaw.toLowerCase();
  if (!SUPPORTED_PROVIDERS.includes(provider)) {
    return {
      configuredDefault: null,
      configuredDefaultWarning: `Configured provider "${providerRaw}" is not supported. Use claude-cli, gemini, openai, or openrouter.`,
    };
  }

  return {
    configuredDefault: {
      provider,
      smallModel,
      bigModel,
    },
    configuredDefaultWarning: null,
  };
}

function resolveSettings() {
  const vscode = loadVSCodeSettings();
  const providerRaw = readSettingString(vscode, SETTINGS_KEYS.provider);
  const smallModel = readSettingString(vscode, SETTINGS_KEYS.smallModel);
  const bigModel = readSettingString(vscode, SETTINGS_KEYS.bigModel);
  const { configuredDefault, configuredDefaultWarning } = resolveConfiguredDefault(providerRaw, smallModel, bigModel);

  return {
    configuredDefault,
    configuredDefaultWarning,
    skipDefaultModelSelection:
      vscode[SETTINGS_KEYS.skipDefaultModelSelection] === true ||
      vscode[SETTINGS_KEYS.legacySkipModelChoice] === true,
    largeDiffThreshold: vscode[SETTINGS_KEYS.largeDiffThreshold] ?? DEFAULT_LARGE_DIFF_THRESHOLD,
  };
}

module.exports = {
  resolveSettings,
};

'use strict';

const {
  MANUAL_VALUE,
} = require('./shared');
const {
  buildCommitMessage,
  buildHeadlessInstructions,
  formatScope,
  getStagedDiff,
  getStagedStat,
  normalizeCommitParts,
  validateHeadlessCommitParts,
} = require('./commit');
const {
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
} = require('./ai');
const { promptForCommit } = require('./prompt-flow');
const { resolveSettings } = require('./settings');

function readHeadlessCommitParts() {
  return normalizeCommitParts({
    type: process.env.CZ_AI_TYPE || '',
    scope: process.env.CZ_AI_SCOPE || '',
    subject: process.env.CZ_AI_SUBJECT || '',
    body: process.env.CZ_AI_BODY || '',
    breaking: process.env.CZ_AI_BREAKING || '',
  });
}

function printJson(value) {
  console.log(JSON.stringify(value, null, 2));
}

async function ensureModelReady(cz, getModelChoices, model, settings) {
  let nextModel = model;

  while (nextModel !== MANUAL_VALUE) {
    const missingKeyMessage = getMissingKeyMessage(nextModel);

    if (!missingKeyMessage) {
      return nextModel;
    }

    const defaultFailure = isConfiguredDefaultModel(nextModel, settings);
    const warningMessage = defaultFailure
      ? `Configured default unavailable. ${missingKeyMessage}`
      : missingKeyMessage;
    const fallbackModel = defaultFailure ? MANUAL_VALUE : getRetryFallbackModel(nextModel);
    nextModel = await promptForModel(
      cz,
      await getModelChoices(),
      nextModel,
      fallbackModel,
      true,
      warningMessage
    );
  }

  return nextModel;
}

async function runHeadlessPrompter(commit, stat) {
  const headlessCommit = readHeadlessCommitParts();

  if (!headlessCommit.subject) {
    printJson(buildHeadlessInstructions(stat));
    return;
  }

  const errors = validateHeadlessCommitParts(headlessCommit);
  if (errors.length) {
    printJson({ errors });
    return;
  }

  console.log(`\n  Headless mode - committing: ${headlessCommit.type}${formatScope(headlessCommit.scope)}: ${headlessCommit.subject}\n`);
  commit(buildCommitMessage(headlessCommit));
}

async function selectModel(cz, settings) {
  const allowOpenRouterModels = Boolean(process.env.OPENROUTER_API_KEY);
  const configuredDefaultModel = getConfiguredDefaultModel(settings);
  const configuredDefaultMissingKeyMessage =
    settings.configuredDefault && getMissingKeyMessage(configuredDefaultModel);
  const defaultSelectionWarning = settings.configuredDefaultWarning ||
    (configuredDefaultMissingKeyMessage
      ? `Configured default unavailable. ${configuredDefaultMissingKeyMessage}`
      : null);
  const initialModel = defaultSelectionWarning ? MANUAL_VALUE : configuredDefaultModel;
  let cachedChoices;

  async function getModelChoices() {
    if (!cachedChoices) {
      cachedChoices = await buildModelChoices(configuredDefaultModel, allowOpenRouterModels, settings);
    }

    return cachedChoices;
  }

  let model = initialModel;

  if (!settings.skipDefaultModelSelection) {
    model = await promptForModel(
      cz,
      await getModelChoices(),
      initialModel,
      MANUAL_VALUE,
      false,
      defaultSelectionWarning
    );
  } else if (settings.configuredDefault && !defaultSelectionWarning) {
    console.log(`\n  Model: ${getModelChoiceLabel(model)} (configured default)\n`);
  } else if (defaultSelectionWarning) {
    model = await promptForModel(
      cz,
      await getModelChoices(),
      MANUAL_VALUE,
      MANUAL_VALUE,
      true,
      defaultSelectionWarning
    );
  } else {
    model = MANUAL_VALUE;
  }

  return {
    getModelChoices,
    model,
  };
}

async function generateAiSuggestion(cz, stat, diff, model, settings, getModelChoices) {
  const largeDiff = diff.length > settings.largeDiffThreshold;
  const { motivation } = await cz.prompt([
    {
      type: 'input',
      name: 'motivation',
      message: 'Motivation / context for these changes (optional, press Enter to skip):',
    },
  ]);

  let selectedModel = model;
  let suggestion = null;

  while (!suggestion) {
    if (selectedModel === MANUAL_VALUE) {
      return {
        model: selectedModel,
        suggestion: null,
      };
    }

    selectedModel = await ensureModelReady(cz, getModelChoices, selectedModel, settings);
    if (selectedModel === MANUAL_VALUE) {
      return {
        model: selectedModel,
        suggestion: null,
      };
    }

    const executionModel = resolveExecutionModel(selectedModel, largeDiff, settings);
    process.stdout.write(`  Generating AI suggestion (${getExecutionModelLabel(selectedModel, executionModel, settings)})...`);

    try {
      suggestion = await getAiSuggestion(stat, diff, motivation, selectedModel, settings, executionModel);
      console.log(` done!\n\n  Suggestion: ${suggestion.type}${formatScope(suggestion.scope)}: ${suggestion.subject}\n`);
    } catch (error) {
      console.log(` failed.\n\n  Warning: ${error.message}\n`);
      const defaultFailure = isConfiguredDefaultModel(selectedModel, settings);
      selectedModel = await promptForModel(
        cz,
        await getModelChoices(),
        selectedModel,
        defaultFailure ? MANUAL_VALUE : getRetryFallbackModel(selectedModel),
        true,
        defaultFailure ? `Configured default failed. ${error.message}` : error.message
      );
    }
  }

  return {
    model: selectedModel,
    suggestion,
  };
}

module.exports = {
  async prompter(cz, commit) {
    const stat = getStagedStat();

    if (!stat) {
      console.log('\n  No staged changes. Run `git add` first.\n');
      return;
    }

    if (process.env.CZ_AI_HEADLESS === '1') {
      return runHeadlessPrompter(commit, stat);
    }

    const settings = resolveSettings();
    const { getModelChoices, model: selectedModel } = await selectModel(cz, settings);
    const readyModel = await ensureModelReady(cz, getModelChoices, selectedModel, settings);

    if (readyModel === MANUAL_VALUE) {
      return promptForCommit(cz, commit, null);
    }

    const diff = getStagedDiff();
    const { suggestion } = await generateAiSuggestion(cz, stat, diff, readyModel, settings, getModelChoices);
    return promptForCommit(cz, commit, suggestion);
  },
};

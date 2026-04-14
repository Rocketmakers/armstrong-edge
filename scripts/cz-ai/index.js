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
  getDefaultModelChoice,
  getExecutionModelLabel,
  getMissingKeyMessage,
  getModelChoiceLabel,
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

function printWarning(message) {
  console.log(`\n  Warning: ${message}\n`);
}

async function ensureModelReady(cz, modelChoices, model) {
  let nextModel = model;

  while (nextModel !== MANUAL_VALUE) {
    const missingKeyMessage = getMissingKeyMessage(nextModel);

    if (!missingKeyMessage) {
      return nextModel;
    }

    printWarning(missingKeyMessage);
    nextModel = await promptForModel(cz, modelChoices, MANUAL_VALUE);
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
  const modelChoices = buildModelChoices(settings);
  const initialModel = getDefaultModelChoice(settings);

  settings.warnings.forEach(printWarning);

  if (settings.skipModelSelection) {
    if (initialModel !== MANUAL_VALUE) {
      const missingKeyMessage = getMissingKeyMessage(initialModel);

      if (missingKeyMessage) {
        printWarning(`Configured default unavailable. ${missingKeyMessage}`);
        return {
          model: MANUAL_VALUE,
          modelChoices,
        };
      }

      console.log(`\n  Model: ${getModelChoiceLabel(initialModel)} (from env)\n`);
      return {
        model: initialModel,
        modelChoices,
      };
    }

    return {
      model: MANUAL_VALUE,
      modelChoices,
    };
  }

  const model = await promptForModel(cz, modelChoices, initialModel);

  return {
    model,
    modelChoices,
  };
}

async function generateAiSuggestion(cz, stat, diff, model, settings, modelChoices) {
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

    selectedModel = await ensureModelReady(cz, modelChoices, selectedModel);
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
      selectedModel = await promptForModel(cz, modelChoices, selectedModel);
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
    const { model: selectedModel, modelChoices } = await selectModel(cz, settings);
    const readyModel = await ensureModelReady(cz, modelChoices, selectedModel);

    if (readyModel === MANUAL_VALUE) {
      return promptForCommit(cz, commit, null);
    }

    const diff = getStagedDiff();
    const { suggestion } = await generateAiSuggestion(cz, stat, diff, readyModel, settings, modelChoices);
    return promptForCommit(cz, commit, suggestion);
  },
};

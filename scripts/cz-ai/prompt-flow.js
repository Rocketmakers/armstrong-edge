'use strict';

const {
  ALLOW_CUSTOM_SCOPES,
  CUSTOM_SCOPE,
  NO_SCOPE,
  SCOPES,
  TYPES,
  supportsBreakingChanges,
} = require('./shared');
const {
  buildCommitMessage,
  capitalize,
  finalizeCommitParts,
  formatScope,
  getScopeValidationError,
  getSubjectValidationError,
} = require('./commit');

function buildScopeChoices() {
  const choices = SCOPES.map(scope => scope.name || NO_SCOPE);

  if (ALLOW_CUSTOM_SCOPES) {
    choices.push(CUSTOM_SCOPE);
  }

  return choices;
}

function resolveDefaultScopeChoice(scopeChoices, suggestedScope) {
  if (!suggestedScope) {
    return NO_SCOPE;
  }

  if (scopeChoices.includes(suggestedScope)) {
    return suggestedScope;
  }

  if (ALLOW_CUSTOM_SCOPES) {
    return CUSTOM_SCOPE;
  }

  return NO_SCOPE;
}

async function promptForScope(cz, suggestedScope) {
  const scopeChoices = buildScopeChoices();
  const defaultChoice = resolveDefaultScopeChoice(scopeChoices, suggestedScope);
  const defaultIndex = Math.max(scopeChoices.findIndex(choice => choice === defaultChoice), 0);

  const { scopeChoice } = await cz.prompt([
    {
      type: 'list',
      name: 'scopeChoice',
      message: 'What is the scope of this change (e.g. component or file name):',
      choices: scopeChoices,
      default: defaultIndex,
    },
  ]);

  if (scopeChoice === NO_SCOPE) {
    return '';
  }

  if (scopeChoice !== CUSTOM_SCOPE) {
    return scopeChoice;
  }

  const { customScope } = await cz.prompt([
    {
      type: 'input',
      name: 'customScope',
      message: 'Custom scope (press Enter for no scope):',
      default: suggestedScope && !scopeChoices.includes(suggestedScope) ? suggestedScope : undefined,
      validate: input => getScopeValidationError(input.trim()) || true,
    },
  ]);

  return customScope.trim();
}

async function manualCommit(cz, commit, defaults) {
  const initial = finalizeCommitParts(defaults);
  const prompts = [
    {
      type: 'input',
      name: 'subject',
      message: 'Write a short, imperative tense description of the change:',
      default: initial.subject || undefined,
      validate: input => getSubjectValidationError(input.trim()) || true,
    },
    {
      type: 'input',
      name: 'body',
      message: 'Provide a longer description of the change (press Enter to skip):',
      default: initial.body || undefined,
    },
  ];

  if (supportsBreakingChanges(initial.type)) {
    prompts.push({
      type: 'input',
      name: 'breaking',
      message: 'List any BREAKING CHANGES (press Enter to skip):',
      default: initial.breaking || undefined,
    });
  }

  const answers = await cz.prompt(prompts);
  const finalCommit = finalizeCommitParts({
    type: initial.type,
    scope: initial.scope,
    subject: answers.subject,
    body: answers.body,
    breaking: answers.breaking,
  });

  commit(buildCommitMessage(finalCommit));
}

function printCommitPreview(commitParts) {
  const preview = finalizeCommitParts(commitParts);

  console.log('\n  ---------------------------------------------');
  console.log(`  ${preview.type}${formatScope(preview.scope)}: ${preview.subject}`);

  if (preview.body) {
    console.log('');
    preview.body.split('\n').forEach(line => console.log(`  ${line}`));
  }

  if (preview.breaking) {
    console.log('');
    console.log(`  BREAKING CHANGE: ${preview.breaking}`);
  }

  console.log('  ---------------------------------------------');
  console.log('');
}

async function promptForCommit(cz, commit, aiSuggestion) {
  const defaultTypeIndex = aiSuggestion
    ? Math.max(TYPES.findIndex(type => type.value === aiSuggestion.type), 0)
    : 0;

  const { type } = await cz.prompt([
    {
      type: 'list',
      name: 'type',
      message: "Select the type of change that you're committing:",
      choices: TYPES,
      default: defaultTypeIndex,
    },
  ]);

  const scope = await promptForScope(cz, aiSuggestion?.scope || '');
  const baseCommit = {
    type,
    scope,
    subject: '',
    body: '',
    breaking: '',
  };

  if (!aiSuggestion) {
    return manualCommit(cz, commit, baseCommit);
  }

  const previewCommit = finalizeCommitParts({
    ...baseCommit,
    subject: capitalize(aiSuggestion.subject),
    body: aiSuggestion.body || '',
    breaking: aiSuggestion.breaking || '',
  });

  printCommitPreview(previewCommit);

  const { action } = await cz.prompt([
    {
      type: 'list',
      name: 'action',
      message: 'What do you want to do with this suggestion?',
      choices: [
        { value: 'accept', name: 'Accept suggestion' },
        { value: 'edit', name: 'Edit before committing' },
        { value: 'abort', name: 'Abort' },
      ],
      default: 0,
    },
  ]);

  if (action === 'abort') {
    console.log('\n  Aborted.\n');
    return;
  }

  if (action === 'edit') {
    return manualCommit(cz, commit, previewCommit);
  }

  commit(buildCommitMessage(previewCommit));
}

module.exports = {
  promptForCommit,
};

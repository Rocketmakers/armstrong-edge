/**
 * Single source of truth for commitizen and cz-ai configuration.
 * Matches Armstrong's existing conventional commit conventions.
 */
const types = [
  {
    name: 'feat',
    description: 'A new feature',
    changelogHeading: 'Features',
    allowBreakingChanges: true,
  },
  {
    name: 'fix',
    description: 'A bug fix',
    changelogHeading: 'Bug Fixes',
    allowBreakingChanges: true,
  },
  {
    name: 'refactor',
    description: 'A code change that neither fixes a bug nor adds a feature',
    changelogHeading: 'Code Refactoring',
    allowBreakingChanges: true,
  },
  {
    name: 'chore',
    description: 'Changes to the build process, tooling, or auxiliary libraries',
    changelogHeading: 'Other Changes',
    allowBreakingChanges: true,
  },
  {
    name: 'revert',
    description: 'Revert a previous commit',
    changelogHeading: 'Reverts',
    allowBreakingChanges: true,
  },
  {
    name: 'docs',
    description: 'Documentation only changes',
    changelogHeading: '',
    allowBreakingChanges: false,
  },
  {
    name: 'style',
    description: 'Changes that do not affect the meaning of the code (white-space, formatting, etc)',
    changelogHeading: '',
    allowBreakingChanges: false,
  },
  {
    name: 'WIP',
    description: 'Work in progress',
    changelogHeading: '',
    allowBreakingChanges: false,
  },
];

const longestTypeName = types.reduce((longest, t) => Math.max(t.name.length, longest), 0);

function buildCommitizenTypeConfig(type, nameIndentSize) {
  const { name, description, changelogHeading } = type;
  const spaces = ' '.repeat(nameIndentSize - name.length);
  const notInChangelogMsg = changelogHeading ? '' : '[not in changelog] ';
  return {
    value: name,
    name: `${name}${spaces} : ${notInChangelogMsg}${description}`,
  };
}

const czCustomizable = {
  types: types
    .sort((a, b) => {
      const ac = !!a.changelogHeading;
      const bc = !!b.changelogHeading;
      return ac === bc ? 0 : ac ? -1 : 1;
    })
    .map(t => buildCommitizenTypeConfig(t, longestTypeName)),

  allowTicketNumber: true,
  isTicketNumberRequired: false,
  ticketNumberPrefix: 'ARM-',
  allowCustomScopes: true,
  allowBreakingChanges: types.filter(t => t.allowBreakingChanges).map(t => t.name),
  skipQuestions: ['footer'],
  subjectLimit: 200,

  scopes: [
    { name: '' },
    { name: 'form' },
    { name: 'hooks' },
    { name: 'components' },
    { name: 'types' },
    { name: 'config' },
    { name: 'deps' },
    { name: 'release' },
  ],
};

/**
 * AI model defaults for cz-ai (OpenRouter).
 * Can be overridden by VS Code setting (harry-cz.ai.model)
 * or env var (CZ_AI_MODEL).
 * Falls back to DEFAULT_MODEL in scripts/cz-ai/index.js if unset.
 */
const ai = {
  defaultModel: 'google/gemini-2.5-flash-lite',
};

module.exports = { czCustomizable, ai };

/**
 * Single source of truth for commitizen and cz-ai configuration.
 * Matches Armstrong's existing conventional commit conventions.
 */
const czCustomizable = {
  types: [
    { value: 'feat', name: 'feat:     A new feature' },
    { value: 'fix', name: 'fix:      A bug fix' },
    { value: 'docs', name: 'docs:     Documentation only changes' },
    {
      value: 'style',
      name: 'style:    Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)',
    },
    {
      value: 'refactor',
      name: 'refactor: A code change that neither fixes a bug nor adds a feature',
    },
    {
      value: 'chore',
      name: 'chore:    Changes to the build process or auxiliary tools and libraries such as documentation generation',
    },
    { value: 'revert', name: 'revert:   Revert to a commit' },
    { value: 'WIP', name: 'WIP:      Work in progress' },
  ],

  allowTicketNumber: true,
  isTicketNumberRequired: false,
  ticketNumberPrefix: 'ARM-',
  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix', 'refactor', 'chore'],
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

module.exports = { czCustomizable };

/** @type {import('stylelint').Config} */
module.exports = {
  extends: ['stylelint-config-standard-scss'],
  ignoreFiles: ['**/node_modules/**/*.*'],
  rules: {
    'at-rule-no-unknown': null,
    'font-family-name-quotes': null,
    'keyframes-name-pattern': null,
    'selector-pseudo-class-no-unknown': [true, { ignorePseudoClasses: ['global'] }],
    'scss/at-rule-no-unknown': true,
    'scss/dollar-variable-empty-line-before': null,
  },
};

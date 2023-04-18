const { createEslintConfig } = require('@rocketmakers/eslint');

const config = createEslintConfig(
  {
    project: ['tsconfig.eslint.json'],
    ignorePatterns: ['**/node_modules/**/*.*', '**/dist/*', '**/storybook-static/*'],
    coreModules: ['glob', '@storybook/addon-actions'],
  },
  {
    'import/no-cycle': 0,
    '@typescript-eslint/no-namespace': 0,
    'react/display-name': 0,
  }
);

module.exports = {
  ...config,
  overrides: [
    ...config.overrides,
    {
      files: ['**/src/**/*.stories.tsx'],
      rules: {
        'react-hooks/rules-of-hooks': 0,
      },
    },
  ],
};

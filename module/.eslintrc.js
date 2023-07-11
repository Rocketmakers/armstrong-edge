const path = require('path');
const { createEslintConfig } = require('@rocketmakers/eslint');

const config = createEslintConfig({
  project: ['./module/tsconfig.eslint.json'],
  ignorePatterns: ['**/node_modules/**/*.*', '**/dist/*', '**/storybook-static/*', '**/.eslintrc.js'],
  coreModules: ['glob', '@storybook/addon-actions'],
});

module.exports = {
  ...config,
  parserOptions: {
    ...config.parserOptions,
    tsconfigRootDir: path.resolve(__dirname, '../'),
  },
  overrides: [
    ...config.overrides,
    {
      files: ['**/src/**/*.stories.tsx'],
      rules: {
        'react-hooks/rules-of-hooks': 0,
        'react/prop-types': 0,
      },
    },
  ],
};

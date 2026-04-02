const path = require('path');
const { createEslintConfig } = require('@rocketmakers/eslint');

const config = createEslintConfig({
  project: ['./module/tsconfig.eslint.json'],
  ignorePatterns: ['**/node_modules/**/*.*', '**/dist/*', '**/.eslintrc.js', '*.stories.tsx'],
  coreModules: ['glob'],
});

module.exports = {
  ...config,

  parserOptions: {
    ...config.parserOptions,
    tsconfigRootDir: path.resolve(__dirname, '../'),
  },

  rules: {
    ...config.rules,
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'function',
        format: ['camelCase', 'PascalCase'],
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
    ],
  },

  overrides: [...config.overrides],
};

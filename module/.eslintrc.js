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

  overrides: [...config.overrides],
};

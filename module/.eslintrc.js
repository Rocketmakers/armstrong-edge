const { createEslintConfig } = require('@rocketmakers/eslint');

const config = createEslintConfig({
  project: ['tsconfig.eslint.json'],
  ignorePatterns: ['**/node_modules/**/*.*', '**/dist/*', '**/storybook-static/*'],
});

module.exports = config;

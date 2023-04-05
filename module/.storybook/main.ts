import type { StorybookConfig } from '@storybook/react-vite';
const config: StorybookConfig = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/test-runner',
    'storybook-addon-designs',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  features: {},
  docs: {
    autodocs: true,
  },
};
module.exports = config;

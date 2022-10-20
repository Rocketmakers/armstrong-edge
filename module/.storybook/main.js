module.exports = {
  stories: ['../../src/**/*.stories.mdx', '../../src/**/*.stories.@(js|jsx|ts|tsx)', '../../docs/**/*.stories.mdx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/test-runner',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
  },
  features: {
    interactionsDebugger: true,
  },
  async viteFinal(config, { configType }) {
    config.resolve.alias = {
      '~@rocketmakers': './node_modules/@rocketmakers',
    };
    config.css = {};
    config.css.modules = {
      localsConvention: 'dashesOnly',
    };
    return config;
  },
};

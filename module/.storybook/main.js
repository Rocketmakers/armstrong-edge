module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-a11y'],
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    const isDevelopment = configType === 'DEVELOPMENT';

    config.module.rules.push({
      test: /\.s?css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader', // turn url() and @import calls into require
          options: {
            sourceMap: isDevelopment,
          },
        },
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: isDevelopment,
            postcssOptions: {
              implementation: require('postcss'),
              plugins: [require('autoprefixer')],
            },
          },
        },
        {
          loader: 'sass-loader', // compile sass
          options: {
            sourceMap: isDevelopment,
          },
        },
      ],
    });

    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        path: require.resolve('path-browserify'),
      },
    };

    // Return the altered config
    return config;
  },
  babel: async (options) => ({
    ...options,
    plugins: [['@babel/plugin-transform-typescript', { isTSX: true, allExtensions: true, allowNamespaces: true }]],
  }),
};

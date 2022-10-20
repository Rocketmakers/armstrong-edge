import injectDevServer from '@cypress/react/plugins/load-webpack';

/**
 * @type {Cypress.PluginConfig}
 */
export default (on, config) => {
  if (config.testingType === 'component') {
    injectDevServer(on, config, { webpackFilename: './.cypress/webpack.config.js' });
  }

  return config;
};

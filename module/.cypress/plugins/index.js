const injectDevServer = require('@cypress/react/plugins/load-webpack');

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  if (config.testingType === 'component') {
    injectDevServer(on, config, { webpackFilename: './.cypress/webpack.config.js' });
  }

  return config;
};

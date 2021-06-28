/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */

module.exports = {
  siteMetadata: {
    siteName: `Rocketmakers Armstrong`,
  },
  plugins: [
    { resolve: `gatsby-plugin-typescript`, options: { esModuleInterop: true } },
    `gatsby-plugin-sass`,
  ],
};

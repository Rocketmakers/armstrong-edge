import { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    siteName: `Rocketmakers Armstrong`,
  },
  plugins: [`gatsby-plugin-typescript`, `gatsby-plugin-sass`],
};

export default config;

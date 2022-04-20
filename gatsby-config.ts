import type { GatsbyConfig } from "gatsby";
import path from 'path';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Gatsby Boilerplate`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image",
    "gatsby-plugin-offline",
    "gatsby-plugin-resolve-src",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.resolve(`src/images`),
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /.svg$/,
        }
      }
    },
  ]
};

export default config;

const path = require('path');
const siteMetaData = require('./site-metadata');

module.exports = {
  siteMetadata: siteMetaData,
  flags: {
    DEV_SSR: true,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: `gatsby-plugin-advanced-sitemap`,
    },
    {
      resolve: `gatsby-plugin-jss`,
      options: {},
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1000,
              quality: 80,
              showCaptions: true,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-graphql-codegen`,
      options: {
        codegen: true,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/site-image.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        style: path.join(__dirname, 'src/style'),
        components: path.join(__dirname, 'src/components'),
        images: path.join(__dirname, 'src/images'),
        utils: path.join(__dirname, 'src/utils'),
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};

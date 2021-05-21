const path = require('path');
const siteMetaData = require('./site-metadata');

module.exports = {
  siteMetadata: siteMetaData,
  flags: {
    DEV_SSR: true,
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: siteMetaData.siteUrl,
        sitemap: `${siteMetaData.siteUrl}/sitemap.xml`,
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tomiez blog`,
        short_name: `Tomiez`,
        start_url: `/`,
        background_color: `#6E7582`,
        theme_color: `#333333`,
        display: `standalone`,
        icon: `./static/site-image.png`, // This path is relative to the root of the site.
        include_favicon: false,
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
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: path.join(__dirname, 'src/components/BaseLayout'),
        },
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `tomato`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};

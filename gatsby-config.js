module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-source-wordpress-menus",
      options: {
        wordpressUrl: "https://your-wordpress-site.com",
        languages: ["de", "en"],
        enableWpml: true,
        allowCache: true,
        maxCacheDurationSeconds: 60 * 60 * 24
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint:
          'https://us20.list-manage.com/contact-form?u=a9ccacb7a86858499c8014209&form_id=b792ce9ab1332b0a1ae2d1b44311344a', // string; add your MC list endpoint here; see instructions below
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        url: 'http://www.ladderstack.team/thansyn/graphql/',
        hostingWPCOM: false,
        protocol: 'http',
        useACF: true,
        auth: {},
        verboseOutput: false,
        // includedRoutes: [
        //   '/*/*/posts',
        //   '/*/*/pages',
        //   '/*/*/media',
        //   '/*/*/menus',
        //   '/*/*/events',
        //   '/*/*/users',
        //   '/*/*/categories',
        //   '/*/*/tags',
        // ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};

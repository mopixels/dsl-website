module.exports = {
  siteMetadata: {
    title: `Don't Sleep, Listen`,
    description: ``,
    author: `Modestas Rimkus`,
    menuLinks: [
      {
        name: "Don't Sleep, Listen",
        link: "/",
      },
      {
        name: "music",
        link: "/music",
      },
      {
        name: "news",
        link: "/news",
      },
      {
        name: "about",
        link: "/about",
      },
      {
        name: "contact",
        link: "/contact",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Don't Sleep, Listen`,
        short_name: `dsl page`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#000`,
        display: `minimal-ui`,
        icon: `src/images/dsl-logo.png`, // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-layout",
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

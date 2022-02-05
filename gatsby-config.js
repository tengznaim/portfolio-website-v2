/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  // Note that the lack of a www in the url below is deliberate due to SSL cert issues when hosting with Firebase.
  siteMetadata: {
    title: `Tengku Naim`,
    titleTemplate: `%s | Tengku Naim`,
    description: `Third year computer science undergraduate who loves using data and computers to solve problems.`,
    url: `https://tengkunaim.web.app`,
    image: "/og.png",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content/`,
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-react-helmet",
  ],
}

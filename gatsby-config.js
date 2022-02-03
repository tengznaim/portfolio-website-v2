/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Tengku Naim`,
    titleTemplate: `%s | Tengku Naim`,
    description: `Tengku Naim is a computer science undergraduate who loves using data and computers to solve problems.`,
    url: `https://www.tengkunaim.web.app`,
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

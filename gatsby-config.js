/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Tengku Naim`,
    // siteUrl: `https://www.gatsbyjs.com`, Update Later
    description: `Tengku Naim is a computer science undergraduate who loves using data and computers to solve human problems.`,
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
  ],
}

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `gatsby-blogg`,
    siteUrl: `https://www.yourdomain.tld`
  },
  // plugins: [`gatsby-plugin-decap-cms`]

  plugins: [`gatsby-plugin-decap-cms`, "gatsby-plugin-sitemap", "gatsby-transformer-remark", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};
module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/data/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-netlify-cms`,
  ],
}

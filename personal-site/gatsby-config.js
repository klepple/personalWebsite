module.exports = {
  siteMetadata: {
    title: "Things and stuff",
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/blog`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
        options: {
          plugins: []
        },
    },
],
};

module.exports = {
  siteMetadata: {
    title: "Aaron Raff's Blog",
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/src/posts`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-transformer-remark",
  ],
};

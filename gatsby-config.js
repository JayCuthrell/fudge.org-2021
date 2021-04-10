module.exports = {
  siteMetadata: {
    title: `fudge.org by Jay Cuthrell`,
    name: `Jay Cuthrell`,
    siteUrl: `https://fudge.org`,
    description: `fudge.org is the on again off again blog of Jay Cuthrell`,
    hero: {
      heading: `Welcome to Novela, the simplest way to start publishing with Gatsby.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/jaycuthrell`,
      },
      {
        name: `github`,
        url: `https://github.com/jaycuthrell`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/jaycuthrell`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `fudge.org by Jay Cuthrell`,
        short_name: `Jay Cuthrell`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon-new.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};

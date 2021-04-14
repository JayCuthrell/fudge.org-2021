module.exports = {
  siteMetadata: {
    title: `fudge.org by Jay Cuthrell`,
    name: `Jay Cuthrell`,
    siteUrl: `https://fudge.org`,
    description: `fudge.org is the on again off again blog of Jay Cuthrell`,
    hero: {
      heading: `Jay Cuthrell wrote this...`,
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
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
		"G-9V7H591PYS",
	],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-emoji`,  // <-- this line adds emoji
        ]
      }
    },
  ],
};

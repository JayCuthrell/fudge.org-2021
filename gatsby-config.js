lconst emoji = require(`remark-emoji`)
module.exports = {
  siteMetadata: {
    title: `fudge.org by Jay Cuthrell`,
    name: `Jay Cuthrell`,
    siteUrl: `https://fudge.org`,
    description: `fudge.org is the on again off again blog of Jay Cuthrell`,
    hero: {
      heading: `Jay Cuthrell wrote this.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/jaycuthrell`,
      },
      {
        name: `github`,
        url: `https://github.com/jaycuthrell`,
      },
      {
        name: `twitter`,
        url: `https://twitter.com/jaycuthrell`,
      },
      {
        name: `mailto`,
        url: `mailto:jay@cuthrell.com`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        authorsPage: true,
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        sources: {
          // contentful: false,
          local: true
        }
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 10000,
              linkImagesToOriginal: false,
              quality: 80,
              withWebp: true
            }
          },
          { resolve: `gatsby-remark-copy-linked-files` },
          { resolve: `gatsby-remark-numbered-footnotes` },
          { resolve: `gatsby-remark-smartypants` },
          { resolve: `gatsby-remark-responsive-iframe` },
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "noreferrer"
            }
          },
        ],
        remarkPlugins: [require(`remark-emoji`),require(`remark-slug`)]
      }
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
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "",
      },
    },
    { 
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: [`/page/*`, `/authors/*`],
      }, 
    },
  ],
};

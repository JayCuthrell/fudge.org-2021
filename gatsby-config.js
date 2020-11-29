const emoji = require(`remark-emoji`)
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
        name: `buymeacoffee`,
        url: `https://www.buymeacoffee.com/jaycuthrell`,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-image`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
     resolve `gatsby-transformer-remark`,
     options: {
         plugins: [
           {
             resolve: `gatsby-remark-table-of-contents`,
             options: {
               exclude: "Table of Contents",
               tight: false,
               ordered: false,
               fromHeading: 1,
               toHeading: 6,
               className: "table-of-contents"
             },
           },
           `gatsby-remark-autolink-headers`
         ],
       },
    `gatsby-transformer-yaml`,
    `gatsby-plugin-theme-ui`,
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        mailchimp: false,
        sources: {
          local: true
        },
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
       {
          resolve: "gatsby-remark-embed-video",
          options: {
            width: 680,
            ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
            height: 400, // Optional: Overrides optional.ratio
            related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
	    noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
	    urlOverrides: [
	      {
	        id: 'youtube',
	        embedURL: (videoId) => `https://www.youtube-nocookie.com/embed/${videoId}`,
	      }
	    ] //Optional: Override URL of a service provider, e.g to enable youtube-nocookie support
	  }
	},
        { resolve: `gatsby-remark-copy-linked-files` },
        { resolve: `gatsby-remark-numbered-footnotes` },
        { resolve: `gatsby-remark-smartypants` },
        { resolve: `gatsby-remark-responsive-iframe` },
        {
          resolve: "gatsby-remark-external-links",
          options: {
            target: '_blank',
            rel: 'noreferrer',
          },
        },
        ],
        remarkPlugins: [require(`remark-emoji`),require(`remark-slug`)]
      }
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        autoLabel: process.env.NODE_ENV === `development`,
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
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-183867939-1",
      },
    },
    { 
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: [`/page/*`, `/authors/*`],
      }, 
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};

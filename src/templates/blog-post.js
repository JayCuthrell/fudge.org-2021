import React from "react"
import { Link, graphql } from "gatsby"
import "styled-components/macro"
import Layout from "../components/layout"
import SEO from "../components/Seo"
import { rhythm, scale } from "../utils/typography"
import { MDXRenderer } from "gatsby-plugin-mdx"

const BlogPostTemplate = props => {
  const post = props.data.mdx
  const siteTitle = props.data.site.siteMetadata.title
  const { previous, next } = props.pageContext
  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article
        css={`
          max-width: 100vw;
          @media only screen and (max-width: 1250px) {
            max-width: 65vw;
          }
          @media only screen and (max-width: 1150px) {
            max-width: 60vw;
          }
          @media only screen and (max-width: 1024px) {
            max-width: 100vw;
          }
        `}
      >
        <header>
          <h1
            style={{
              marginTop: rhythm(0.5),
              marginBottom: 0,
            }}
          >
            {post.frontmatter.title}
            
          </h1>

          <p
            style={{
              ...scale(-1 / 5),
              paddingTop: 10,
              opacity: 0.9,
            }}
          >
            Posted {post.frontmatter.date} ~{" "}
            {post.fields.readingTime.text}
            {" ☕"}
          </p>
        </header>
        <MDXRenderer>{post.body}</MDXRenderer>

        <footer>
          <>
            {/* <hr
              style={{
                marginBottom: rhythm(1),
              }}
            /> */}
          </>
        </footer>
      </article>

      <nav>
        <ul
          style={{
            marginLeft: 0,
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {(() => {
              if (previous) {
                if (previous.hasOwnProperty("fields")) {
                  if (previous.fields.slug !== `/about/`) {
                    return (
                      <Link to={previous.fields.slug} rel="previous">
                        ← {previous.frontmatter.title}
                      </Link>
                    )
                  }
                }
              }
            })()}
          </li>
          <li>
            {(() => {
              if (next) {
                if (next.hasOwnProperty("fields")) {
                  if (next.fields.slug !== `/about/`) {
                    return (
                      <Link to={next.fields.slug} rel="next">
                        {next.frontmatter.title} →
                      </Link>
                    )
                  }
                }
              }
            })()}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      fields {
        readingTime {
          text
        }
      }
      frontmatter {
        title
        description
        date(formatString: "MMMM D, Y")
      }
    }
  }
`

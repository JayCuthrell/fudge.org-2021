import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import { SocialIcon } from "react-social-icons"

const StyledLink = styled.a`
  padding-top: 10px;
`

const About = ({ location }) => {
  return (
    <Layout location={location}>
      <h2>About</h2>
      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <div
          style={{
            display: "flex",
          }}
        >
          Hi. I'm Jay.

          <SocialIcon
            style={{ height: 32, width: 32, marginLeft: "1em", marginRight: "1em" }}
            url="https://www.linkedin.com/in/jaycuthrell"
            bgColor={"var(--icons)"}
          />
          <SocialIcon
            style={{ height: 32, width: 32, marginRight: "1em" }}
            url="https://github.com/jaycuthrell"
            bgColor={"var(--icons)"}
          />
          <SocialIcon
            style={{ height: 32, width: 32, marginRight: "1em" }}
            url="https://twitter.com/jaycuthrell"
            bgColor={"var(--icons)"}
          />
        </div>
      </div>
        <p>
          I typed a lot of what you see here but the theme is based on the work of several others.
        </p>
        <p>
          <StyledLink href="https://github.com/adamistheanswer/gatsby-starter-baysik-blog">Theme</StyledLink>
        </p>
        <p>
          <StyledLink href="https://github.com/jonathandannel/jonathandannel.com">Customizations</StyledLink>
        </p>
    </Layout>
  )
}

export default About

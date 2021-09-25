import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { navigate, useStaticQuery } from "gatsby"
import { graphql } from "gatsby"
import SiteLogo from "../SiteLogo"
import DarkModeToggle from "../DarkModeToggle"
import TextField from "../TextField"

const SideMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  grid-template-columns: 1fr;
  grid-gap: 30px;
  padding-top: 25px;
  min-width: 300px;
  max-width: 300px;
  position: fixed;
  height: 100%;
  padding-bottom: 100px;
`
const TopWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
  justify-items: center;
`

const BottomWrapper = styled.div`
  padding-top: 35px;
  min-width: 300px;
  max-width: 300px;
  display: flex;
  flex-direction: column-reverse;
  bottom: 0;
  align-items: center;
`

const SideLinks = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-top: -15px;
`

const StyledLink = styled.a`
  padding-top: 10px;
`

const SideMenu = ({ location, rootPath, isSearch }) => {
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    setSearchQuery(new URLSearchParams(location.search).get("keywords") || "")
  }, [location.search, searchQuery])

  const data = useStaticQuery(graphql`
    query CountQuery {
      allMdx(
        filter: { fileAbsolutePath: { regex: "/(posts)/.*.(mdx|md)$/" } }
      ) {
        edges {
          node {
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)

  return (
    <SideMenuWrapper>
      <TopWrapper>
        <SiteLogo />
        <p>
          <StyledLink href="/about">Jay Cuthrell</StyledLink> wrote this...
        </p>
        <DarkModeToggle />
        <SideLinks>
          {location.pathname === rootPath ? (
            <>
              {location.pathname === "/about/" && (
                <StyledLink href="/">Back home /</StyledLink>
              )}
            </>
          ) : (
            <>
              {location.pathname !== "/" && (
                <StyledLink href="/">Back home /</StyledLink>
              )}
            </>
          )}
        </SideLinks>
      </TopWrapper>
      <BottomWrapper>
        <div style={{ width: "85%" }}>
          <TextField
            autoFocus={isSearch} // eslint-disable-line
            search={true}
            type="search"
            id="search-input"
            name="keywords"
            aria-controls="search-results-count"
            handleChange={value =>
              navigate(`/search?keywords=${encodeURIComponent(value)}`)
            }
            value={searchQuery}
            placeholder={`Search all ${data.allMdx.edges.length} tagged posts`}
          />
        </div>
      </BottomWrapper>
      <BottomWrapper>
        <div style={{ width: "85%" }}>
        <p>
          <StyledLink href="https://jaycuthrell.com/disclosure">#include &lt;disclaimer.h&gt;</StyledLink>
        </p>
        </div>
      </BottomWrapper>
    </SideMenuWrapper>
  )
}

export default SideMenu

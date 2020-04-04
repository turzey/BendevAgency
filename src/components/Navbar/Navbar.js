import React, { useState } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { useStaticQuery, graphql } from "gatsby"
import Hamburger from "./Hamburger"
import styled from "styled-components"

const NavBar = styled.nav`
  padding: 0 1.875rem;
  position: fixed;
  width: 100%;
  z-index: 5;
  background-color: transparent;
  padding: 25px 0;
`

const NavLogo = styled.div`
  font-size: 0.875rem;
  font-weight: 300;
  width: 60%;
  flex-shrink: 0;
  letter-spacing: 2px;
  z-index: 2;
  text-transform: uppercase;

  @media (min-width: 1200px) {
    font-size: 1rem;
  }

  a {
    color: #fff;
    text-decoration: none;
    transition: color 0.3s;

    @media (hover: hover) {
      &:hover {
        color: var(--primary);
      }
    }
  }
`

const NavCenter = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
`

const Navbar = () => {
  const [isOpen, setNav] = useState(false)
  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <NavBar>
        <NavCenter>
          <NavLogo>
            <AniLink cover bg="var(--background)" to="/">
              {siteMetadata.title}
            </AniLink>
          </NavLogo>
          <Hamburger />
        </NavCenter>
      </NavBar>
    </>
  )
}

export default Navbar

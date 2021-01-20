import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
// import { GlobalProvider } from "../../provider"
import Navbar from "../components/Navbar"
import "../assets/scss/main.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)

  return (
    <>
      <Navbar menuLinks={data.site.siteMetadata.menuLinks} />
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

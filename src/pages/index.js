import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { GlobalStateContext } from "../../provider"
import MusicPreview from "../components/MusicPreview"
import NewsPreview from "../components/NewsPreview"
import ContactPreview from "../components/ContactPreview"
import AboutPreview from "../components/AboutPreview"

const index = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <GlobalStateContext.Consumer>
        {context => (
          <div className="preview">
            {context[0] === "/music" ? (
              <MusicPreview />
            ) : context[0] === "/news" ? (
              <NewsPreview />
            ) : context[0] === "/about" ? (
              <AboutPreview />
            ) : context[0] === "/contact" ? (
              <ContactPreview />
            ) : null}
          </div>
        )}
      </GlobalStateContext.Consumer>
    </Layout>
  )
}

export default index

import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import Info from "../components/contactInfo"
import { GlobalStateContext } from "../../provider"

function contact() {
  // const [status] = useState(GlobalStateContext)
  // console.log(GlobalStateContext)
  return (
    <Layout>
      <SEO title="contact" />
      <GlobalStateContext.Consumer>
        {context => (
          <>
            <h2>{context}</h2>
          </>
        )}
      </GlobalStateContext.Consumer>
    </Layout>
  )
}

export default contact

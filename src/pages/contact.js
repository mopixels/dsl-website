import React, { useContext } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Context } from "../../provider"

const contact = () => {
  // const [status, setStatus] = useContext(Context)

  return (
    <Layout>
      <React.Fragment>
        <SEO title="Page two" />
        {/* {status} */}
        <h1>Contact</h1>
      </React.Fragment>
    </Layout>
  )
}

export default contact

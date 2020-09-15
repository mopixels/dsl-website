import React, { useContext } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Context } from "../../provider"

const index = () => {
  return (
    <Layout>
      <Context.Consumer>
        {context => (
          <React.Fragment>
            <SEO title="Home" />
          </React.Fragment>
        )}
      </Context.Consumer>
    </Layout>
  )
}

export default index

// <h1>{context.isDark ? "Dark Theme" : "Light Theme"}</h1>
// <button onClick={() => context.changeTheme()}>
//   {context.isDark ? "Light" : "Dark"}
// </button>

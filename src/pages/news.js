import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => {
  return (
    <Layout>
      <SEO title="Page two" />
      <h1>News</h1>
      <ul style={{ fontSize: "2rem" }}>
        <li>TExt1</li>
        <li>TExt2</li>
        <li>TExt3</li>
      </ul>
    </Layout>
  )
}

export default SecondPage

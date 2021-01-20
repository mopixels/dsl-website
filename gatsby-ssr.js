// import React from "react"
// import GlobalContextProvider from "./provider"

// export const wrapRootElement = ({ element }) => {
//   return <GlobalContextProvider>{element}</GlobalContextProvider>
// }

const React = require("react")
const GlobalContextProvider = require("./provider").default

exports.wrapRootElement = ({ element }) => {
  return <GlobalContextProvider>{element}</GlobalContextProvider>
}

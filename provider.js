import React, { useState } from "react"

export const GlobalStateContext = React.createContext()

const GlobalContextProvider = ({ children }) => {
  const [status, setStatus] = useState(window.location.pathname)
  return (
    <GlobalStateContext.Provider value={[status, setStatus]}>
      {children}
    </GlobalStateContext.Provider>
  )
}

export default GlobalContextProvider

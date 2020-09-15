import React, { useState } from "react"

export const Context = React.createContext()

export const Provider = ({ children }) => {
  // const [isDark, setTheme] = useState(false)
  const [status, setStatus] = useState(window.location.pathname)

  return (
    <Context.Provider value={{ status, setStatus }}>
      {children}
    </Context.Provider>
  )
}

// export default ({ element }) => <Provider>{element}</Provider>

// export const MenuProvider = ({ children }) => {
//   const [active, setActive] = useState(true);
//   return (
//     <MenuContext.Provider value={{active,setActive}}>
//       {children}
//     </MenuContext.Provider>
//   );
// };

// const themes = {
//     light: {
//       foreground: "#000000",
//       background: "#eeeeee",
//     },
//     dark: {
//       foreground: "#ffffff",
//       background: "#222222",
//     },
//   }

//   const Context = React.createContext(themes.light)

//   <Context.Provider value={themes.dark}>

// </Context.Provider>

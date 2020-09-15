import React, { useState } from "react"
import { Link } from "gatsby"

const NavLink = ({ children, to }) => {
  return (
    <Link className="navLink" to={to}>
      {children}
    </Link>
  )
}

export default NavLink

import React from "react"
import { Link } from "gatsby"

const NavLink = ({ children, to, setCurrentPage }) => {
  // const [currentPage, setCurrentPage] = useState()

  const selectPage = () => {
    setCurrentPage(to)
  }
  return (
    <Link className="navLink" to={to} onClick={selectPage}>
      {children}
    </Link>
  )
}

export default NavLink

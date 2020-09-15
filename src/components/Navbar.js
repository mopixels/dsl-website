import React, { useState, useEffect, useContext } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Slider from "react-slick"
import NavLink from "./NavLink"
import { Context } from "../../provider"

// import imag from "../images/nav_index.png"

function Navbar({ menuLinks }) {
  const { allFile: navImages } = useStaticQuery(graphql`
    query {
      allFile(filter: { name: { glob: "nav_*" } }) {
        edges {
          node {
            childImageSharp {
              fluid {
                originalName
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const [status, setStatus] = useContext(Context)

  const [initialSlide, setInitialSlide] = useState()
  const [navImage, setNavImage] = useState()
  // const [status, setStatus] = useState(window.location.pathname)

  // const location = window.location.pathname.slice(1)

  // console.log("status", status)

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    swipeToSlide: true,
    focusOnSelect: true,
    // lazyLoad: true,
    afterChange: current => setStatus(menuLinks[current].link),
    // className: "center",
    // variableWidth: true,
  }

  useEffect(() => {
    console.log("status", status)
    const selected = status.slice(1)
    const currentNavImage = navImages.edges.find(
      ({ node }) =>
        node.childImageSharp.fluid.originalName ===
        (selected ? `nav_${selected}.png` : "nav_index.png")
    )
    setNavImage(currentNavImage.node.childImageSharp.fluid)
    // console.log("navImage", currentNavImage.node.childImageSharp.fluid)
    // console.log("navImage", currentNavImage.node.childImageSharp)
  }, [status])

  useEffect(() => {
    const initialIndex = menuLinks.findIndex(
      item => item.link === window.location.pathname
    )
    setInitialSlide(initialIndex)
    setStatus(menuLinks[initialIndex].link)
  }, [])

  return (
    // <Context.Consumer>
    //   {context => (
    //     <React.Fragment>
    <nav className="navbar" role="navigation" aria-label="main-navigation">
      <ul className="navbar__container">
        <Slider {...settings} initialSlide={initialSlide}>
          {menuLinks.map(item => (
            <li
              key={item.name}
              className={`navbar__container-item`}
              to={item.link}
              // onClick={() => setActive(item.link)}
              index={item.name}
            >
              <NavLink to={item.link}>{item.name}</NavLink>
            </li>
          ))}
        </Slider>
      </ul>
      <Img
        fluid={navImage}
        alt="Background image"
        style={{ position: "absolute" }}
        className="navbar__image"
      />
    </nav>
    //     </React.Fragment>
    //   )}
    // </Context.Consumer>
  )
}

export default Navbar

// <SEO title="Home" />
// <h1>{context.isDark ? "Dark Theme" : "Light Theme"}</h1>
// <button onClick={() => context.changeTheme()}>
//   {context.isDark ? "Light" : "Dark"}
// </button>

import React, {
  useState,
  useEffect,
  useContext,
  useRef,
  useCallback,
} from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Slider from "react-slick"
import NavLink from "./NavLink"
import { GlobalStateContext } from "../../provider"

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

  const [status, setStatus] = useContext(GlobalStateContext)
  console.log("status", status)

  const [initialSlide, setInitialSlide] = useState()
  const [navImage, setNavImage] = useState("")
  const sliderRef = useRef()

  let location = window.location.pathname
  const [currentPage, setCurrentPage] = useState(location)

  const handleScroll = useCallback(e => {
    if (e.deltaY > 0) {
      sliderRef && sliderRef.current.slickPrev()
    } else if (e.deltaY < 0) {
      sliderRef && sliderRef.current.slickNext()
    }
  }, [])

  useEffect(() => {
    currentPage === "/"
      ? window.addEventListener("wheel", handleScroll)
      : window.removeEventListener("wheel", handleScroll)

    return () => window.removeEventListener("wheel", handleScroll)
  }, [currentPage])

  useEffect(() => {
    const currentSlide = status.slice(1)
    const currentNavImage = navImages.edges.find(
      ({ node }) =>
        node.childImageSharp.fluid.originalName ===
        (currentSlide ? `nav_${currentSlide}.png` : "nav_index.png")
    )
    setNavImage(currentNavImage.node.childImageSharp.fluid)
  }, [status])

  useEffect(() => {
    const initialIndex = menuLinks.findIndex(item => item.link === location)
    setInitialSlide(initialIndex)
    setStatus(menuLinks[initialIndex].link)
    // location === "/" && window.addEventListener("wheel", e => handleScroll(e))
    // console.log("kas vykst")
  }, [])

  console.log(currentPage)

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    swipeToSlide: true,
    focusOnSelect: true,
    beforeChange: (oldIndex, newIndex) => setStatus(menuLinks[newIndex].link),
    className: "navbar__slider",
    // lazyLoad: true,
    // variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <>
      {currentPage === "/" ? (
        <nav className="navbar" role="navigation" aria-label="main-navigation">
          <ul className="navbar__container">
            <Slider {...settings} initialSlide={initialSlide} ref={sliderRef}>
              {menuLinks.map(item => (
                <li
                  key={item.name}
                  className={`navbar__container-item`}
                  to={item.link}
                  index={item.name}
                >
                  <NavLink to={item.link} setCurrentPage={setCurrentPage}>
                    {item.name}
                  </NavLink>
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
      ) : (
        <nav
          className="navbar-top"
          role="navigation"
          aria-label="main-navigation"
        >
          {menuLinks.map(item => (
            <li
              key={item.name}
              className={`navbar__container-item`}
              to={item.link}
              index={item.name}
            >
              <NavLink to={item.link} setCurrentPage={setCurrentPage}>
                {item.name}
              </NavLink>
            </li>
          ))}
          <Img
            fluid={navImage}
            alt="Background image"
            style={{ position: "absolute" }}
            className="navbar__image"
          />
        </nav>
      )}
    </>
  )
}

export default Navbar

// <SEO title="Home" />
// <h1>{context.isDark ? "Dark Theme" : "Light Theme"}</h1>
// <button onClick={() => context.changeTheme()}>
//   {context.isDark ? "Light" : "Dark"}
// </button>

// const useOnScroll = (refs, callback) => {
//   useEffect(() => {
//     const handleScroll = e => {
//       console.log("thiz one", refs)
//       if (refs.some(ref => ref.current === "/")) {
//         console.log("tru")
//         if (e.deltaY > 0) {
//           sliderRef && sliderRef.current.slickPrev()
//         } else if (e.deltaY < 0) {
//           sliderRef && sliderRef.current.slickNext()
//         }
//       } else {
//         callback(false)
//       }
//     }

//     window.addEventListener("wheel", handleScroll)

//     return () => {
//       window.removeEventListener("wheel", handleScroll)
//     }
//   }, [refs, callback])
// }

// const someRef = useRef(currentPage)
// // const someOtherRef = useRef()
// useOnScroll([someRef], () => {
//   console.log("location changed !")
// })
// const bibilst = item => {
//   // console.log(item)
// }
// const handleScroll = e => {
//   if (window.location.pathname != "/") {
//     console.log("lioco", window.location.pathname)
//     return window.removeEventListener("wheel", handleScroll)
//   } else {
//     if (e.deltaY > 0) {
//       sliderRef && sliderRef.current.slickPrev()
//     } else if (e.deltaY < 0) {
//       sliderRef && sliderRef.current.slickNext()
//     }
//   }
// }

// function handleScroll(e) {
//   console.log("handleScroll")
//   if (e.deltaY > 0) {
//     sliderRef && sliderRef.current.slickPrev()
//   } else if (e.deltaY < 0) {
//     sliderRef && sliderRef.current.slickNext()
//   }
// }

// useEffect(() => {
//   if (window.location.pathname === "/") {
//     window.addEventListener("wheel", e => handleScroll(e))
//     console.log("added")
//   } else {
//     console.log("removed")
//     return () => window.removeEventListener("wheel", handleScroll)
//   }
//   // return () => window.removeEventListener("wheel", e => handleScroll(e))

//   // console.log("location", location)
//   // location === "/"
//   //   ? window.addEventListener("wheel", e => handleScroll(e))
//   //   : window.removeEventListener("wheel", console.log("cancel"))
// }, [window.location.pathname])

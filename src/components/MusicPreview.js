import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const MusicPreview = () => {
  const { allFile: albumImages } = useStaticQuery(graphql`
    query {
      allFile(
        filter: { name: { glob: "album_*" } }
        sort: { fields: childImageSharp___fluid___originalName, order: DESC }
      ) {
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

  return (
    <div className="albumsPreview">
      {albumImages.edges.slice(0, 6).map(images => (
        <Img
          fluid={images.node.childImageSharp.fluid}
          alt="Album image"
          className="albumsPreview__image"
        />
      ))}
    </div>
  )
}

export default MusicPreview

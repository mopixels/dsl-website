import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const NewsPreview = () => {
  const { allFile: news, file: picture } = useStaticQuery(graphql`
    query {
      file(
        relativeDirectory: { eq: "news" }
        extension: { eq: "png" }
        name: { eq: "placeHolder" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      allFile(
        filter: { relativeDirectory: { eq: "news" }, extension: { eq: "md" } }
        sort: { order: DESC, fields: birthTime }
      ) {
        nodes {
          childMarkdownRemark {
            frontmatter {
              title
            }
            fields {
              image {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  let newsItems = [...Array(6)]
  newsItems.splice(0, news.nodes.length, ...news.nodes)

  return (
    <div className="newsPreview">
      {newsItems.map(item => (
        <div className="newsPreview__item">
          {item === undefined ? (
            <Img
              fluid={picture.childImageSharp.fluid}
              alt="Placeholder image"
              className="albumsPreview__image"
            />
          ) : item.childMarkdownRemark.fields === null ? (
            <div className="newsPreview__item-title">
              {item.childMarkdownRemark.frontmatter.title}
            </div>
          ) : (
            <Img
              fluid={
                item.childMarkdownRemark.fields.image.childImageSharp.fluid
              }
              alt="News image"
              className="albumsPreview__image"
            />
          )}
        </div>
      ))}
    </div>
  )
}

export default NewsPreview

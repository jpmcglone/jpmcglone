import React from "react"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

function renderImage(props, file) {
  console.log(file)
  return <Img {...props} fluid={file.node.childImageSharp.fluid} />
}

const Image = function (props) {
  return (
    <StaticQuery
      query={graphql`
        query {
          images: allFile(
            filter: { extension: { regex: "/jpeg|jpg|jpeg|png|gif/" } }
          ) {
            edges {
              node {
                extension
                relativePath
                childImageSharp {
                  fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      `}
      render={({ images }) =>
        renderImage(
          props,
          images.edges.find((image) => image.node.relativePath === props.src)
        )
      }
    />
  )
}

Image.defaultProps = {
  src: "jpmcglone-logo.png",
}

export default Image

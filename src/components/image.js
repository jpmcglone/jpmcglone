import React from "react"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

function renderImage(props, file) {
  return <Img {...props} fluid={file.node.childImageSharp.fluid} />
}

const Image = function (props) {
  return (
    <StaticQuery
      query={graphql`
        query {
          assets: allFile(
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
      render={({ assets }) =>
        renderImage(
          props,
          assets.edges.find((asset) => asset.node.relativePath === props.src)
        )
      }
    />
  )
}

Image.defaultProps = {
  src: "logo.png",
}

export default Image

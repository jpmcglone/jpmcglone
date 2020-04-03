import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import projects from "../../content/projects"

const Index = ({ data, location }) => {
  const posts = data.allMarkdownRemark.edges

  const allProjects = projects.map((project, index) => {
    const file = require(`../images/${project.image_filename}`)

    return (
      <div
        key={index}
        style={{
          position: "relative",
          display: "inline-block",
          width: 120,
          height: 120,
          margin: 5,
        }}
      >
        <a href={project.url} target="__blank" alt={project.title}>
          <img src={file} />
          <div
            style={{
              backgroundColor: "rgb(0,0,0, 0.6)",
              width: "100%",
              height: 40,
              position: "absolute",
              top: 80,
              left: "0%",
            }}
          >
            <div
              style={{
                color: "white",
                marginTop: 7,
                fontSize: 12,
                fontWeight: "bold",
              }}
            >
              {project.title}
            </div>
          </div>
        </a>
      </div>
    )
  })

  return (
    <Layout style={{ textAlign: "center" }}>
      <SEO title="Home" />

      <div>
        <div
          style={{
            textAlign: "center",
            marginTop: 50,
            maxWidth: 1024,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <h4>
            JP McGlone, LLC
            <br />
            is under construction
          </h4>
          <p style={{ fontSize: 14 }}>
            In the meantime, check out our current projects:
          </p>

          <div style={{ margin: "0 auto" }}>{allProjects}</div>
        </div>
      </div>
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            author
            tags
          }
        }
      }
    }
  }
`

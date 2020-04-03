import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import projects from "../../content/projects"

const Index = () => {
  const allProjects = projects.map((project, index) => {
    const file = require(`../images/${project.image_filename}`)

    return (
      <div key={index} style={{ display: "inline-block", maxWidth: 100, margin: 5 }}>
        <a href={project.url} target="__blank" alt={project.title}>
          <img src={file}/>
        </a>
      </div>
    )
  })

  return (
    <Layout style={{ textAlign: "center" }}>
      <SEO title="Home" />

      <div>
        <div style={{ textAlign: "center", marginTop: 50, maxWidth: 1024, marginLeft: "auto", marginRight: "auto" }}>
          <h4>JP McGlone, LLC<br />is under construction</h4>
          <p style={{ fontSize: 14 }}>In the meantime, check out our current projects:</p>

          <div style={{ margin: "0 auto" }}>
            {allProjects}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Index
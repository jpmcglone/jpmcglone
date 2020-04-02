import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Img from "gatsby-image/withIEPolyfill"
import SEO from "../components/seo"


const Index = () => {
  const data = useStaticQuery(graphql`
    query {
      file: file(relativePath: { eq: "swiftguild-square-logo.png" }) {
        childImageSharp {
          fixed(width: 500) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      file2: file(relativePath: { eq: "jordan-peterson.png" }) {
        childImageSharp {
          fixed(width: 500) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      file3: file(relativePath: { eq: "youtube-logo.jpeg" }) {
        childImageSharp {
          fixed(width: 500) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Layout style={{ textAlign: "center" }}>
      <SEO title="Home" />

      <div>

        <div style={{ textAlign: "center", marginTop: 50, maxWidth: 1024, marginLeft: "auto", marginRight: "auto" }}>
          <h4>JP McGlone, LLC<br/>is under construction</h4>
          <p style={{ fontSize: 14 }}>In the meantime, check out our current projects:</p>

          <div style={{ margin: "0 auto" }}>
            <a style={{ display: "inline-block" }} href="https://swiftguild.com" target="_blank" alt="Swift Guild">
              <Img style={{ margin: 5, maxWidth: 100, maxHeight: 100 }} objectFit="cover" objectPosition="50% 80%" alt="Swift Guild" fixed={data.file.childImageSharp.fixed} />
            </a>

            <a style={{ display: "inline-block" }} href="https://www.youtube.com/channel/UCo4eqJcS7KsiRl5JJTTJkWw?view_as=subscriber" target="_blank" alt="JP Interviews">
              <Img style={{ margin: 5, maxWidth: 100, maxHeight: 100 }} objectFit="cover" objectPosition="50% 80%" alt="JP Interviews" fixed={data.file3.childImageSharp.fixed} />
            </a>

            <a style={{ display: "inline-block" }} href="https://www.meetup.com/Jordan-Peterson-Study-Group/" target="_blank" alt="Jordan Peterson Study Group">
              <Img style={{ margin: 5, maxWidth: 100, maxHeight: 100 }} objectFit="cover" objectPosition="50% 80%" alt="Jordan Peterson Study Group" fixed={data.file2.childImageSharp.fixed} />
            </a>

          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Index
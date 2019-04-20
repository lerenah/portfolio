import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaGulp } from "react-icons/fa"
import Info from "../components/Home/info"
import BackgroundImage from "../components/Globals/BackgroundImage"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <BackgroundImage
      img={data.img.childImageSharp.fluid}
      title="Hello World!"
      styleClass="default-background"
    />
    <FaGulp />
    <Info />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "headshot.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage

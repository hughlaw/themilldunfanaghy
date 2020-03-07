import React from 'react'
import {StaticQuery, graphql} from 'gatsby'

const AboutUs = ({ data }) => (
  <section id="about-us">
    <h1>{data.markdownRemark.frontmatter.aboutUs.title}</h1>
    {data.markdownRemark.frontmatter.aboutUs.aboutUsText}
    <h2>{data.markdownRemark.frontmatter.aboutUs.title2}</h2>
    {data.markdownRemark.frontmatter.aboutUs.aboutUsText2}
    <button type="button" className="button">Book a room</button>
  </section>
)


export default props => (
  <StaticQuery
    query={graphql`
      {
        markdownRemark(frontmatter: {pageIdentifier: {eq: "homepage"}}) {
          frontmatter {
            aboutUs {
              title
              aboutUsText
              title2
              aboutUsText2
            }
          }
        }
      }
    `}
    render={data => <AboutUs data={data} {...props} />}
  ></StaticQuery>
)
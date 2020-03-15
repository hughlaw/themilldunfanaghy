import React from 'react'
import {StaticQuery, graphql} from 'gatsby'

const AboutUs = ({ data }) => (
  <section id="about-us">
    <h2>{data.markdownRemark.frontmatter.aboutUs.title}</h2>
    <div className="restricted-width">
      {data.markdownRemark.frontmatter.aboutUs.aboutUsText}
    </div>
    <h3>{data.markdownRemark.frontmatter.aboutUs.title2}</h3>
    <div className="restricted-width">
      {data.markdownRemark.frontmatter.aboutUs.aboutUsText2}
    </div>
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
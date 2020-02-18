import React from 'react'
import {StaticQuery, graphql} from 'gatsby'

const AboutUs = ({ data }) => (
  <section id="about-us">
    <h1>{data.markdownRemark.frontmatter.title}</h1>
    <div dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}></div>
    <button type="button" className="button">Book a room</button>

  </section>
)


export default props => (
  <StaticQuery
    query={graphql`
      {
        markdownRemark(frontmatter: {templateKey: {eq: "aboutus"}}) {
          frontmatter {
            title
          }
          html
        }
      }
    `}
    render={data => <AboutUs data={data} {...props} />}
  ></StaticQuery>
)
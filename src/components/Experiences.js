import React from 'react';
import {StaticQuery, graphql} from 'gatsby'
import Image from 'gatsby-image'

const Experiences = ({ data }) => (
  <section id="experiences">
    <h1>{data.pageContent.frontmatter.title}</h1>
    <p>{data.pageContent.frontmatter.openingText}</p>

    <div className="divider">
      <Image
        fluid={data.rowingBoats.childImageSharp.fluid}
        className="divider__image"
        alt="Rowing boats moored at the side of the new lake on a warm summer's evening"/>
    </div>

    <div dangerouslySetInnerHTML={{ __html: data.pageContent.html }}></div>

  </section>
)

export default props => (
  <StaticQuery
    query={graphql`
      {
        pageContent: markdownRemark(frontmatter: {templateKey: {eq: "experiences"}}) {
          frontmatter {
            title
            openingText
          }
          html
        }
        rowingBoats: file(relativePath: {eq: "boats-on-the-new-lake-large@2x.jpg"}) {
          childImageSharp {
            fluid(quality: 80, webpQuality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Experiences data={data} {...props} />}
  ></StaticQuery>
)
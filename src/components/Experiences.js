import React from 'react';
import {StaticQuery, graphql} from 'gatsby'
import Image from 'gatsby-image'

const Experiences = ({ data }) => (
  <section id="experiences">
    <h1>{data.pageContent.frontmatter.experiences.title}</h1>
    <p>{data.pageContent.frontmatter.experiences.openingText}</p>

    <div className="divider">
      <Image
        fluid={data.pageContent.frontmatter.experiences.dividerExperiences.childImageSharp.fluid}
        className="divider__image"
        alt="Rowing boats moored at the side of the new lake on a warm summer's evening"/>
    </div>
    <div className="restricted-width">
      {data.pageContent.frontmatter.experiences.secondaryText}
    </div>
  </section>
)

export default props => (
  <StaticQuery
    query={graphql`
      {
        pageContent: markdownRemark(frontmatter: {pageIdentifier: {eq: "homepage"}}) {
          frontmatter {
            experiences {
              openingText
              dividerExperiences {
                childImageSharp {
                  fluid(quality: 90, webpQuality: 90) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              secondaryText
              title
            }
          }
        }
      }
    `}
    render={data => <Experiences data={data} {...props} />}
  ></StaticQuery>
)
import React from "react";
import {StaticQuery, graphql} from 'gatsby'
import BookButton from './BookButton'

const Introduction = ({ data }) => (
  <section id="introduction">
    <div className="splash">
      <div className="splash__brand">
        <span className="splash__brand--centered">The Mill</span>
        <span className="splash__brand--centered splash__brand--small">Dunfanaghy</span>
      </div>
    </div>
    <h1 className="sr-only">Introduction</h1>
    <div className="grid intro-grid restricted-width">
      <div className="grid__cell text--with-margin-top">
        {data.markdownRemark.frontmatter.introduction.introText}
      </div>

      <div className="grid__cell">
        <BookButton />

        <h2>Opening hours</h2>
        <p>{data.markdownRemark.frontmatter.introduction.openingDatesText}</p>
      </div>
    </div>
  </section>
)

export default props => (
  <StaticQuery
    query={graphql`
      {
        markdownRemark(frontmatter: {pageIdentifier: {eq: "homepage"}}) {
          frontmatter {
            introduction {
              introText
              openingDatesText
            }
          }
        }
      }
    `}
    render={data => <Introduction data={data} {...props} />}
  ></StaticQuery>
)
import React from "react";
import {StaticQuery, graphql} from 'gatsby'

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
      <div className="grid__cell text--with-margin-top" dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}>
      </div>

      <div className="grid__cell">
        <button type="button" className="button">Book a room</button>

        <h2>Opening hours</h2>
        <p>We are open from March until November.</p>
      </div>
    </div>
  </section>
)

export default props => (
  <StaticQuery
    query={graphql`
      {
        markdownRemark(frontmatter: {templateKey: {eq: "introduction"}}) {
          html
        }
      }
    `}
    render={data => <Introduction data={data} {...props} />}
  ></StaticQuery>
)
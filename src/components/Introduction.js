import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import BookButton from './BookButton';
import Image from 'gatsby-image';

const Introduction = ({ data }) => {
  const content = data.markdownRemark.frontmatter;
  return (
    <section id="introduction">
      <div className="splash">
        <Image fluid={content.splashImage.childImageSharp.fluid} alt="" />
        <div className="splash__brand">
          <h1>
            <span className="splash__brand--centered">The Mill</span>
            <span className="splash__brand--centered splash__brand--small">
              Dunfanaghy
            </span>
          </h1>
        </div>
      </div>
      {content.alert.showAlert && (
        <div className="alert restricted-width">
          {content.alert.alertTitle && (
            <strong>{content.alert.alertTitle}</strong>
          )}
          {content.alert.alertText}
        </div>
      )}
      <h2 className="sr-only">Introduction</h2>
      <div className="grid intro-grid restricted-width">
        <div className="grid__cell">{content.introduction.introText}</div>

        <div className="grid__cell">
          <h3 className="no-margin-top">Opening hours</h3>
          <p>{content.introduction.openingDatesText}</p>
          <BookButton />
        </div>
      </div>
    </section>
  );
};

export default (props) => (
  <StaticQuery
    query={graphql`
      {
        markdownRemark(frontmatter: { pageIdentifier: { eq: "homepage" } }) {
          frontmatter {
            splashImage {
              childImageSharp {
                fluid(
                  quality: 80
                  webpQuality: 80
                  jpegQuality: 80
                  jpegProgressive: true
                ) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            alert {
              alertText
              alertTitle
              showAlert
            }
            introduction {
              introText
              openingDatesText
            }
          }
        }
      }
    `}
    render={(data) => <Introduction data={data} {...props} />}
  ></StaticQuery>
);

import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

const AboutUs = ({ data }) => {
  const frontmatter = data.markdownRemark.frontmatter.aboutUs;
  return (
    <section id="about-us">
      <h2>{frontmatter.title}</h2>
      <div className="restricted-width">
        {frontmatter.aboutUsText}
        <Image
          fixed={frontmatter.profileImage.childImageSharp.fixed}
          alt="profile image"
          className="profile__image"
        />
      </div>
      <h3>{frontmatter.title2}</h3>
      <div className="restricted-width">{frontmatter.aboutUsText2}</div>
      <button type="button" className="button">
        Book a room
      </button>
    </section>
  );
};
export default (props) => (
  <StaticQuery
    query={graphql`
      {
        markdownRemark(frontmatter: { pageIdentifier: { eq: "homepage" } }) {
          frontmatter {
            aboutUs {
              title
              aboutUsText
              title2
              aboutUsText2
              profileImage {
                childImageSharp {
                  fixed(width: 200, height: 200) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => <AboutUs data={data} {...props} />}
  ></StaticQuery>
);

import React from 'react';
import facebook from '../img/facebook.svg';
import instagram from '../img/instagram.svg';
import { StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

const Footer = ({ data }) => {
  const images = data.markdownRemark.frontmatter.footer_.awardImages;
  const awardImages = images.map(({ awardImage }, idx) => {
    return (
      <Image
        key={idx}
        fixed={awardImage.childImageSharp.fixed}
        alt=""
        className="award__image"
      />
    );
  });

  return (
    <footer>
      <div className="restricted-width d-flex justify-content-between">
        <div className="col">
          <address className="address">
            The Mill
            <br />
            Dunfanaghy
            <br />
            Co. Donegal
            <br />
            Ireland
            <br />
            <a
              href="tel://+353749136985"
              className="footer__link--block link--unstyled text--with-margin-top"
              aria-label="Call us on 00353 74 913 6985"
            >
              +353 (0)74 913 6985
            </a>
            <a
              href="mailto:info@themilldunfanaghy.com"
              className="footer__link--block link--unstyled"
              aria-label="Email us at info@themilldunfanaghy.com"
            >
              info@themilldunfanaghy.com
            </a>
          </address>
          <div className="social">
            <a
              href="https://www.facebook.com/themilldunfanaghy/"
              target="_blank"
              rel="noopener noreferrer"
              className="social__icon"
              aria-label="The Mill on Facebook"
            >
              <picture>
                <img
                  src={facebook}
                  width="25"
                  height="25"
                  alt="facebook icon"
                />
              </picture>
            </a>
            <a
              href="https://www.instagram.com/themilldunfanaghy/"
              target="_blank"
              rel="noopener noreferrer"
              className="social__icon"
              aria-label="The Mill on Instagram"
            >
              <picture>
                <img
                  src={instagram}
                  width="25"
                  height="25"
                  alt="Instagram icon"
                />
              </picture>
            </a>
          </div>
        </div>
        <div className="col">{awardImages}</div>
      </div>
    </footer>
  );
};

export default (props) => (
  <StaticQuery
    query={graphql`
      {
        markdownRemark {
          frontmatter {
            footer_ {
              awardImages {
                awardImage {
                  childImageSharp {
                    fixed(
                      quality: 5
                      width: 125
                      height: 125
                      background: "rgba(255,255,255,1)"
                    ) {
                      ...GatsbyImageSharpFixed
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => <Footer data={data} {...props} />}
  ></StaticQuery>
);

import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import SiemaGallery from './SiemaGallery';

const Rooms = ({ data }) => {
  const frontmatter = data.pageContent.frontmatter;
  const rooms = frontmatter.rooms.roomInfo.map((room, idx) => {
    const highlights = room.roomHighlights.map((highlight, i) => (
      <li key={i}>{highlight}</li>
    ));

    let priceText;
    if (room.soText) {
      priceText = (
        <span className="card__text--with-margin">
          {room.price}
          <br />
          {room.soText}
        </span>
      );
    } else {
      priceText = <span className="card__text--with-margin">{room.price}</span>;
    }

    return (
      <div className="card" key={room.roomName}>
        <SiemaGallery images={room.roomImages} idx={idx} />

        <div className="card__text">
          <h3>
            <span className="sr-only">Room:</span>
            {room.roomName}
          </h3>
          <ul className="card__text--no-bullets">{highlights}</ul>
          {priceText}
        </div>
      </div>
    );
  });

  return (
    <section id="rooms">
      <h2>{frontmatter.rooms.title}</h2>

      <div className="restricted-width">{frontmatter.rooms.intro1}</div>

      <div className="divider">
        <Image
          fluid={frontmatter.divider1.childImageSharp.fluid}
          className="divider__image"
          alt="Misty view of new lake at sun rise"
        />
      </div>

      <div className="restricted-width">{frontmatter.rooms.intro2}</div>

      <div className="grid room-grid restricted-width">{rooms}</div>

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
        pageContent: markdownRemark(
          frontmatter: { pageIdentifier: { eq: "homepage" } }
        ) {
          html
          frontmatter {
            title
            rooms {
              intro1
              intro2
              title
              roomInfo {
                price
                roomHighlights
                roomName
                soText
                roomImages {
                  roomImage {
                    childImageSharp {
                      fluid {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                  roomImageAlt
                }
              }
            }
            divider1 {
              childImageSharp {
                fluid(quality: 90, webpQuality: 80) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => <Rooms data={data} {...props} />}
  ></StaticQuery>
);

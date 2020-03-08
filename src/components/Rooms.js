import React from "react";
import {StaticQuery, graphql} from 'gatsby'
import Image from 'gatsby-image'

const Rooms = ({ data }) => {
  const rooms = data.pageContent.frontmatter.rooms.roomInfo.map((room) => {

    const highlights = room.roomHighlights.map((highlight, i) =>
      <li key={i}>{highlight}</li>
    );

    const altTextForImage = `Interior of ${room.roomName}`;

    let priceText;
    if (room.soText) {
      priceText = (<span className="card__text--with-margin">{room.price}<br />{room.soText}</span>)
    } else {
      priceText = (<span className="card__text--with-margin">{room.price}</span>)
    }

    return (
      <div className="card" key={room.roomName}>
        <Image
          fluid={room.roomImage.childImageSharp.fluid}
          className="card__image"
          alt={altTextForImage} />

        <div className="card__text">
          <h2>{room.roomName}</h2>
          <ul className="card__text--no-bullets">
            {highlights}
          </ul>
          {priceText}
        </div>
      </div>
    )
  })

  return (
    <section id="rooms">
      <h1>{data.pageContent.frontmatter.rooms.title}</h1>

      {data.pageContent.frontmatter.rooms.intro1}

      <div className="divider">
        <Image
          fluid={data.pageContent.frontmatter.divider1.childImageSharp.fluid}
          className="divider__image"
          alt="Misty view of new lake at sun rise"/>
      </div>

      {data.pageContent.frontmatter.rooms.intro2}

      <div className="grid room-grid restricted-width">
        {rooms}
      </div>

      <button type="button" className="button">Book a room</button>

    </section>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      {
        pageContent: markdownRemark(frontmatter: {pageIdentifier: {eq: "homepage"}}) {
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
                roomImage {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
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
    render={data => <Rooms data={data} {...props} />}
  ></StaticQuery>
)
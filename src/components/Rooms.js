import React from "react";
import {StaticQuery, graphql} from 'gatsby'
import Image from 'gatsby-image'
import Room from './Room';

const Rooms = ({ data }) => (
  <section id="rooms">
    <div className="divider">
      <Image
        fluid={data.newLake.childImageSharp.fluid}
        className="divider__image"
        alt="Misty view of new lake at sun rise"/>
    </div>
    <h1>{data.pageContent.frontmatter.title}</h1>
    <div dangerouslySetInnerHTML={{ __html: data.pageContent.html }}></div>

    <div className="grid room-grid restricted-width">

      <Room />

      <div className="card">
        <img src="./media/images/figart.jpg"
          sizes="100%"
          srcSet="./media/images/figart@2x.jpg 670w,
                  ./media/images/figart.jpg 335w"
          alt="interior of the Figart room"
          className="card__image" />
        <div className="card__text">
          <h2>Figart</h2>
          <ul className="card__text--no-bullets">
            <li>168 sq feet</li>
            <li>Double bed with ensuite bath and shower</li>
            <li>Lake view</li>
          </ul>
          <span className="card__text--with-margin">From €60 per person<br />
            Single occupancy from €75</span>
        </div>
      </div>

      <div className="card">
        <img src="./media/images/rinclevin.jpg"
          sizes="100%"
          srcSet="./media/images/rinclevin@2x.jpg 670w,
                  ./media/images/rinclevin.jpg 335w"
          alt="interior of the Rinclevin room"
          className="card__image" />
        <div className="card__text">
          <h2>Rinclevin</h2>
          <ul className="card__text--no-bullets">
            <li>137.5 sq feet</li>
            <li>Double bed with ensuite shower</li>
            <li>Lake view</li>
          </ul>
          <span className="card__text--with-margin">From €60 per person<br />
            Single occupancy from €75</span>
        </div>
      </div>

      <div className="card">
        <img src="./media/images/castlebane.jpg"
          sizes="100%"
          srcSet="./media/images/castlebane@2x.jpg 670w,
                  ./media/images/castlebane.jpg 335w"
          alt="interior of the Castlebane room"
          className="card__image" />
        <div className="card__text">
          <h2>Castlebane</h2>
          <ul className="card__text--no-bullets">
            <li>196 sq feet</li>
            <li>King size bed</li>
            <li>Ensuite bath and shower</li>
            <li>Lake view</li>
            <li>Nepresso coffee machine</li>
          </ul>
          <span className="card__text--with-margin">From €65 per person</span>
        </div>
      </div>

      <div className="card">
        <img src="./media/images/casey.jpg"
          sizes="100%"
          srcSet="./media/images/casey@2x.jpg 670w,
                  ./media/images/casey.jpg 335w"
          alt="interior of the Casey room"
          className="card__image" />
        <div className="card__text">
          <h2>Casey</h2>
          <ul className="card__text--no-bullets">
            <li>176 sq feet</li>
            <li>Kingsize bed with ensuite shower</li>
            <li>Lake view</li>
            <li>Nepresso Coffee Machine</li>
          </ul>
          <span className="card__text--with-margin">From €65 per person</span>
        </div>
      </div>

      <div className="card">
        <img src="./media/images/marfagh.jpg"
          sizes="100%"
          srcSet="./media/images/marfagh@2x.jpg 670w,
                  ./media/images/marfagh.jpg 335w"
          alt="interior of the Marfagh room"
          className="card__image" />
        <div className="card__text">
          <h2>Marfagh</h2>
          <ul className="card__text--no-bullets">
            <li>187.5 sq feet</li>
            <li>Double bed and single bed (twin option)</li>
            <li>Ensuite bath and shower</li>
            <li>Overlooking trees</li>
            <li>Nepresso Coffee machine</li>
          </ul>
          <span className="card__text--with-margin">From €65 per person</span>
        </div>
      </div>

      <div className="card">
        <img src="./media/images/corgannive.jpg"
          sizes="100%"
          srcSet="./media/images/corgannive@2x.jpg 670w,
                  ./media/images/corgannive.jpg 335w"
          alt="interior of the Corgannive room"
          className="card__image" />
        <div className="card__text">
          <h2>Corgannive</h2>
          <ul className="card__text--no-bullets">
            <li>187.5 sq feet</li>
            <li>Kingsize bed and single bed (twin option)</li>
            <li>Ensuite bath and shower</li>
            <li>Overlooking the trees</li>
            <li>Nepresso Coffee machine</li>
          </ul>
          <span className="card__text--with-margin">From €65 per person</span>
        </div>
      </div>

    </div>

    <button type="button" className="button">Book a room</button>

  </section>
)

export default props => (
  <StaticQuery
    query={graphql`
      {
        pageContent: markdownRemark(frontmatter: {templateKey: {eq: "rooms"}}) {
          html
          frontmatter {
            title
          }
        }
        newLake: file(relativePath: {eq: "new-lake-in-the-mist-large@2x.jpg"}) {
          childImageSharp {
            fluid(quality: 80, webpQuality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Rooms data={data} {...props} />}
  ></StaticQuery>
)
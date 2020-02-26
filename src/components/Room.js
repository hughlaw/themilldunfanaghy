import React from 'react';
import {StaticQuery, graphql} from 'gatsby'
import Image from 'gatsby-image'

class Room extends React.Component {
  render() {
    return (
      <div className="card">
        <img src="./media/images/studio.jpg"
          sizes="100%"
          srcSet="./media/images/studio@2x.jpg 670w,
                  ./media/images/studio.jpg 335w"
          alt="interior of the Studio room"
          className="card__image" />
        <div className="card__text">
          <h2>The Studio</h2>
          <ul className="card__text--no-bullets">
            <li>396 sq feet</li>
            <li>Kingsize Four poster bed</li>
            <li>Roll top bath in bedroom</li>
            <li>Power shower</li>
            <li>Nepresso Coffee machine</li>
            <li>Overlooking drive and garden</li>
            <li>Sitting Area</li>
          </ul>
          <span className="card__text--with-margin">From €80 per person</span>
        </div>
      </div>
    )
  }
}

export default Room;
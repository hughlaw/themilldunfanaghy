import React from "react"
import {StaticQuery, graphql} from 'gatsby'
import Image from 'gatsby-image'
import Siema from 'siema';
import prevIconSvg from '../img/slideshow/prev-arrow.svg';
import prevIconPng from '../img/slideshow/prev-arrow@2x.png';
import nextIconSvg from '../img/slideshow/next-arrow.svg';
import nextIconPng from '../img/slideshow/next-arrow@2x.png';

class Gallery extends React.Component {

  componentDidMount() {
    this.slideshow = new Siema({
      duration: 300,
      easing: 'ease-in-out',
      loop: true
    });
  }

  onNavigateSlideshow = (direction) => {
    this.slideshow[direction]()
  }

  render() {
    return (
      <section id="gallery" className="gallery no-padding">
        <button className="gallery__button gallery__button-prev" aria-label="Previous image" onClick={() => this.onNavigateSlideshow('prev')}>
          <picture>
            <source srcSet={prevIconSvg} />
            <img src={prevIconPng} alt="previous slide" />
          </picture>
        </button>

        <button className="gallery__button gallery__button-next" aria-label="Next image" onClick={() => this.onNavigateSlideshow('next')}>
        <picture>
            <source srcSet={nextIconSvg} />
            <img src={nextIconPng} alt="next slide" />
          </picture>
        </button>

        <div className="siema">

          <Image
            fluid={this.props.data.dogsOnTheBeach.childImageSharp.fluid}
            className="siema__image"
            alt="Two happy dogs on the beach"/>

          <Image
            fluid={this.props.data.muckishInWinter.childImageSharp.fluid}
            className="siema__image"
            alt="Winter scene with Muckish mountain in the background"/>

          <Image
            fluid={this.props.data.horsesOnTheBeach.childImageSharp.fluid}
            className="siema__image"
            alt="Horses running on a beach"/>

          <Image
            fluid={this.props.data.newLakeSunset.childImageSharp.fluid}
            className="siema__image"
            alt="Sunset scene at new lake"/>

        </div>
      </section>
    )
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      {
        dogsOnTheBeach: file(relativePath: {eq: "slideshow/dogs-on-the-beach-large@2x.jpg"}) {
          childImageSharp {
            fluid(quality: 80, webpQuality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        muckishInWinter: file(relativePath: {eq: "slideshow/muckish-in-the-winter-large@2x.jpg"}) {
          childImageSharp {
            fluid(quality: 80, webpQuality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        horsesOnTheBeach: file(relativePath: {eq: "slideshow/horses-on-the-beach-large@2x.jpg"}) {
          childImageSharp {
            fluid(quality: 80, webpQuality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        newLakeSunset: file(relativePath: {eq: "slideshow/new-lake-at-sunset-large@2x.jpg"}) {
          childImageSharp {
            fluid(quality: 80, webpQuality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Gallery data={data} {...props} />}
  ></StaticQuery>
)
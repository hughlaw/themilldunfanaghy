import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
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
      loop: true,
    });
  }

  onNavigateSlideshow = (direction) => {
    this.slideshow[direction]();
  };

  render() {
    const galleryImages = this.props.data.markdownRemark.frontmatter.gallery.map(
      (image, i) => {
        return (
          <Image
            fluid={image.galleryImage.childImageSharp.fluid}
            className="siema__image"
            alt={image.altText}
            key={i}
          />
        );
      }
    );

    return (
      <section id="gallery" className="gallery no-padding">
        <button
          className="gallery__button gallery__button-prev"
          aria-label="Previous image"
          onClick={() => this.onNavigateSlideshow('prev')}
        >
          <picture>
            <source srcSet={prevIconSvg} />
            <img src={prevIconPng} alt="previous slide" />
          </picture>
        </button>

        <button
          className="gallery__button gallery__button-next"
          aria-label="Next image"
          onClick={() => this.onNavigateSlideshow('next')}
        >
          <picture>
            <source srcSet={nextIconSvg} />
            <img src={nextIconPng} alt="next slide" />
          </picture>
        </button>

        <div className="siema">{galleryImages}</div>
      </section>
    );
  }
}

export default (props) => (
  <StaticQuery
    query={graphql`
      {
        markdownRemark(frontmatter: { pageIdentifier: { eq: "homepage" } }) {
          frontmatter {
            gallery {
              galleryImage {
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
              altText
            }
          }
        }
      }
    `}
    render={(data) => <Gallery data={data} {...props} />}
  ></StaticQuery>
);

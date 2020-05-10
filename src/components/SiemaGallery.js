import React, { useEffect, useRef } from 'react';
import Image from 'gatsby-image';
import Siema from 'siema';
import prevIconSvg from '../img/slideshow/prev-arrow.svg';
import prevIconPng from '../img/slideshow/prev-arrow@2x.png';
import nextIconSvg from '../img/slideshow/next-arrow.svg';
import nextIconPng from '../img/slideshow/next-arrow@2x.png';

export default function SiemaGallery({ images, idx }) {
  const slideshowRef = useRef(null);

  const imageCollection = images.map((image, i) => {
    return (
      <Image
        fluid={image.roomImage.childImageSharp.fluid}
        className="siema__image card__image"
        alt={image.roomImageAlt}
        key={i}
      />
    );
  });

  useEffect(() => {
    if (imageCollection.length > 1) {
      slideshowRef.current = new Siema({
        selector: `.siema_rooms_${idx}`,
        duration: 300,
        easing: 'ease-in-out',
        loop: true,
      });
    }
  }, []);

  return (
    <div className="slide__wrapper">
      {imageCollection.length > 1 && (
        <>
          <button
            className="gallery__button gallery__button-prev"
            aria-label="Previous image"
            onClick={() => slideshowRef.current.prev()}
          >
            <picture>
              <source srcSet={prevIconSvg} />
              <img src={prevIconPng} alt="previous slide" />
            </picture>
          </button>

          <button
            className="gallery__button gallery__button-next"
            aria-label="Next image"
            onClick={() => slideshowRef.current.next()}
          >
            <picture>
              <source srcSet={nextIconSvg} />
              <img src={nextIconPng} alt="next slide" />
            </picture>
          </button>
        </>
      )}
      <div className={`siema_rooms_${idx}`}>{imageCollection}</div>
    </div>
  );
}

import React from "react"

const Gallery = () => (
  <section id="gallery" className="gallery no-padding">
    <button className="gallery__button gallery__button-prev" aria-label="Previous image">
      <picture>
        <source srcSet="./media/images/slideshow/prev-arrow.svg" />
        <img src="./media/images/slideshow/prev-arrow@2x.png" alt="previous slide" />
      </picture>
    </button>

    <button className="gallery__button gallery__button-next" aria-label="Next image">
      <picture>
        <source srcSet="./media/images/slideshow/next-arrow.svg" />
        <img src="./media/images/slideshow/next-arrow@2x.png" alt="next slide" />
      </picture>
    </button>

    <div className="siema">
      <img src="./media/images/slideshow/dogs-on-the-beach-small.jpg"
        sizes="100vw"
        srcSet="./media/images/slideshow/dogs-on-the-beach-small.jpg 375w,
                ./media/images/slideshow/dogs-on-the-beach-small@2x.jpg 750w,
                ./media/images/slideshow/dogs-on-the-beach-medium.jpg 834w,
                ./media/images/slideshow/dogs-on-the-beach-medium@2x.jpg 1668w,
                ./media/images/slideshow/dogs-on-the-beach-large.jpg 1440w,
                ./media/images/slideshow/dogs-on-the-beach-large@2x.jpg 2880w"
        alt="Two happy dogs on the beach"
        className="siema__image" />

      <img src="./media/images/slideshow/muckish-in-the-winter-small.jpg"
        sizes="100vw"
        srcSet="./media/images/slideshow/muckish-in-the-winter-small.jpg 375w,
                ./media/images/slideshow/muckish-in-the-winter-small@2x.jpg 750w,
                ./media/images/slideshow/muckish-in-the-winter-medium.jpg 834w,
                ./media/images/slideshow/muckish-in-the-winter-medium@2x.jpg 1668w,
                ./media/images/slideshow/muckish-in-the-winter-large.jpg 1440w,
                ./media/images/slideshow/muckish-in-the-winter-large@2x.jpg 2880w"
        alt="winter scene with Muckish mountain in the background"
        className="siema__image" />

      <img src="./media/images/slideshow/horses-on-the-beach-small.jpg"
        sizes="100vw"
        srcSet="./media/images/slideshow/horses-on-the-beach-small.jpg 375w,
                ./media/images/slideshow/horses-on-the-beach-small@2x.jpg 750w,
                ./media/images/slideshow/horses-on-the-beach-medium.jpg 834w,
                ./media/images/slideshow/horses-on-the-beach-medium@2x.jpg 1668w,
                ./media/images/slideshow/horses-on-the-beach-large.jpg 1440w,
                ./media/images/slideshow/horses-on-the-beach-large@2x.jpg 2880w"
        alt="winter scene with Muckish mountain in the background"
        className="siema__image" />

      <img src="./media/images/slideshow/new-lake-at-sunset-small.jpg"
        sizes="100vw"
        srcSet="./media/images/slideshow/new-lake-at-sunset-small.jpg 375w,
                ./media/images/slideshow/new-lake-at-sunset-small@2x.jpg 750w,
                ./media/images/slideshow/new-lake-at-sunset-medium.jpg 834w,
                ./media/images/slideshow/new-lake-at-sunset-medium@2x.jpg 1668w,
                ./media/images/slideshow/new-lake-at-sunset-large.jpg 1440w,
                ./media/images/slideshow/new-lake-at-sunset-large@2x.jpg 2880w"
        alt="winter scene with Muckish mountain in the background"
        className="siema__image" />
    </div>

  </section>
)
export default Gallery
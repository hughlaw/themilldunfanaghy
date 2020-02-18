import PropTypes from "prop-types"
import React from "react"

const Navigation = () => (
  <nav className="navigation">
    <div className="navigation__bg"></div>

    <button className="hamburger hamburger--spin" type="button" aria-label="Menu">
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>

    <div className="navigation__panel">

      <ul className="navigation__link-block">
        <li className="navigation__item">
          <a className="navigation__link link--unstyled" href="#rooms">Our rooms</a>
        </li>
        <li className="navigation__item">
          <a className="navigation__link link--unstyled" href="#food-and-drink">Food & drink</a>
        </li>
        <li className="navigation__item">
          <a className="navigation__link link--unstyled" href="#experiences">Experiences</a>
        </li>
        <li className="navigation__item">
          <a className="navigation__link link--unstyled" href="#about-us">About us</a>
        </li>
      </ul>

      <button type="button" className="button navigation__book-button">Book a room</button>

      <div className="navigation__contact-details">
        <address className="address">
          The Mill<br />
          Dunfanaghy<br />
          Co. Donegal<br />
          Ireland<br />

          <a href="tel://+353749136985" className="footer__link--block link--unstyled text--with-margin-top">+353 (0)74 913 6985</a>
          <a href="mailto:info@themilldunfanaghy.com" className="footer__link--block link--unstyled">info@themilldunfanaghy.com</a>
        </address>

        <div className="social">
          <a href="https://www.facebook.com/themilldunfanaghy/" target="_blank" rel="noopener noreferrer" className="social__icon" aria-label="The Mill on Facebook">
            <picture>
              <source srcSet="./media/images/facebook.svg 25w" />
              <img src="./media/images/facebook@2x.png" width="25" height="25" alt="facebook icon" />
            </picture>
          </a>
          <a href="https://www.instagram.com/themilldunfanaghy/" target="_blank" rel="noopener noreferrer" className="social__icon" aria-label="The Mill on Instagram">
            <picture>
              <source srcSet="./media/images/instagram.svg 25w" />
              <img src="./media/images/instagram@2x.png" width="25" height="25" alt="Instagram icon" />
            </picture>
          </a>
        </div>

      </div>

    </div>

  </nav>
)

Navigation.propTypes = {
  siteTitle: PropTypes.string,
}

Navigation.defaultProps = {
  siteTitle: ``,
}

export default Navigation

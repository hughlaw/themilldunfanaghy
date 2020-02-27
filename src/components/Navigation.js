import PropTypes from "prop-types"
import React from "react"
import {throttle, delay} from 'lodash';
import facebook from '../img/facebook.svg';
import instagram from '../img/instagram.svg';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.handleScroll = throttle(this.checkMenuVisibility, 500);
  }

  initMenu() {
    window.addEventListener('scroll', this.handleScroll, { passive: true });
  }

  onToggleMenu(e) {
    const isSmallScreen = window.innerWidth < 700;
    const menuButton = document.querySelector(`.hamburger`);
    const navigation = document.querySelector(`.navigation`);
    const nav_panel  = document.querySelector(`.navigation__panel`);

    if (isSmallScreen) {
      menuButton.classList.toggle('is-active');
      navigation.classList.toggle('is-active');
      nav_panel.classList.toggle('is-active');
    }

    if (e.target.classList.contains('navigation__link')) {
      delay(() => {
        window.scrollTo({
          top: window.scrollY - 60,
          behavior: 'smooth'
        })
      }, 1);
    }
  }

  checkMenuVisibility = (e) => {
      const viewport_height = window.innerHeight;
      const scroll_length   = window.scrollY;
      const nav_bg          = document.querySelector('.navigation__bg');

      if (scroll_length > viewport_height) {
        nav_bg.classList.add('is-active');
      } else {
        nav_bg.classList.remove('is-active');
      }
  }

  componentDidMount() {
    this.initMenu();
  }

  render() {
    return (
      <nav className="navigation">
        <div className="navigation__bg"></div>

        <button className="hamburger hamburger--spin" type="button" aria-label="Menu" onClick={this.onToggleMenu}>
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>

        <div className="navigation__panel">

          <ul className="navigation__link-block">
            <li className="navigation__item">
              <a className="navigation__link link--unstyled" href="#rooms" onClick={this.onToggleMenu}>Our rooms</a>
            </li>
            <li className="navigation__item">
              <a className="navigation__link link--unstyled" href="#food-and-drink" onClick={this.onToggleMenu}>Food & drink</a>
            </li>
            <li className="navigation__item">
              <a className="navigation__link link--unstyled" href="#experiences" onClick={this.onToggleMenu}>Experiences</a>
            </li>
            <li className="navigation__item">
              <a className="navigation__link link--unstyled" href="#about-us" onClick={this.onToggleMenu}>About us</a>
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
                  <img src={facebook} width="25" height="25" alt="facebook icon" />
                </picture>
              </a>
              <a href="https://www.instagram.com/themilldunfanaghy/" target="_blank" rel="noopener noreferrer" className="social__icon" aria-label="The Mill on Instagram">
                <picture>
                  <img src={instagram} width="25" height="25" alt="Instagram icon" />
                </picture>
              </a>
            </div>

          </div>

        </div>

      </nav>
    )
  }
}

Navigation.propTypes = {
  siteTitle: PropTypes.string,
}

Navigation.defaultProps = {
  siteTitle: ``,
}

export default Navigation

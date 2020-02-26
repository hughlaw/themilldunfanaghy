import React from 'react'
import Layout from '../components/Layout'
import Navigation from '../components/Navigation';
import Introduction from '../components/Introduction';
import Rooms from '../components/Rooms';
import FoodAndDrink from '../components/FoodAndDrink';
import Experiences from '../components/Experiences';
import Gallery from '../components/Gallery';
import AboutUs from '../components/AboutUs';

export const IndexPageTemplate = () => (
  <div>
    <Navigation />

    <Introduction />

    <Rooms />

    <FoodAndDrink />

    <Experiences />

    <Gallery />

    <AboutUs />

  <footer>
    <div className="restricted-width">
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
  </footer>

  </div>
)

const IndexPage = () => (
  <Layout>
    <IndexPageTemplate />
  </Layout>
)

export default IndexPage

import React from 'react'
import Layout from '../components/Layout'
import WebFont from 'webfontloader';

import Navigation from '../components/Navigation';
import Introduction from '../components/Introduction';
import Rooms from '../components/Rooms';
import FoodAndDrink from '../components/FoodAndDrink';
import Experiences from '../components/Experiences';
import Gallery from '../components/Gallery';
import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';

class IndexPageTemplate extends React.Component {

  componentDidMount() {
    if (typeof window !== 'undefined') {
      WebFont.load({
        google: {
          families: ['Montserrat', 'Playfair Display', 'sans-serif']
        }
      });
    }
  }

  render() {
    return (
      <>
        <Navigation />

        <Introduction />

        <Rooms />

        <FoodAndDrink />

        <Experiences />

        <Gallery />

        <AboutUs />

        <Footer />
      </>
    )
  }
}

const IndexPage = () => (
  <Layout>
    <IndexPageTemplate />
  </Layout>
)

export default IndexPage
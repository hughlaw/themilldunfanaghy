import React from 'react';
import Layout from '../components/Layout';

import Navigation from '../components/Navigation';
import Introduction from '../components/Introduction';
import Rooms from '../components/Rooms';
import FoodAndDrink from '../components/FoodAndDrink';
import Experiences from '../components/Experiences';
import Gallery from '../components/Gallery';
import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';
import Map from '../components/Map';

const WebFont = typeof window !== `undefined` ? require('webfontloader') : null;

class IndexPageTemplate extends React.Component {
  componentDidMount() {
    if (typeof window !== 'undefined') {
      WebFont.load({
        google: {
          families: ['Montserrat', 'Playfair Display', 'sans-serif'],
        },
      });
    }
  }

  render() {
    return (
      <>
        <Navigation />

        <main>
          <Introduction />

          <Rooms />

          <FoodAndDrink />

          <Experiences />

          <Gallery />

          <AboutUs />

          <Map />

          <Footer />
        </main>
      </>
    );
  }
}

const IndexPage = () => (
  <Layout>
    <IndexPageTemplate />
  </Layout>
);

export default IndexPage;

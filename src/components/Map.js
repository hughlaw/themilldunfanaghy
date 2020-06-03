import React from 'react';
import GoogleMapReact from 'google-map-react';
import mapIcon from '../img/map-marker.png';

const Marker = () => {
  const style = {
    position: 'absolute',
    transform: 'translate(-50%, -100%)',
    filter: 'drop-shadow(0 0px 1px rgba(0,0,0,.3))',
  };
  return <img src={mapIcon} alt="" width="64" height="92" style={style} />;
};

export default function Map() {
  const markerLocation = {
    lat: 55.176901,
    lng: -7.979223,
  };

  return (
    <section id="find-us" className="no-padding no-margin">
      <div className="with-padding">
        <h2>Find us</h2>
      </div>
      <div style={{ height: '40vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyB0NyLEx5VVudy1pV4VuECcr6TqvMmcZQU' }}
          defaultZoom={10}
          defaultCenter={markerLocation}
        >
          <Marker
            lat={markerLocation.lat}
            lng={markerLocation.lng}
            text="The Mill Dunfanaghy"
          />
        </GoogleMapReact>
      </div>
    </section>
  );
}

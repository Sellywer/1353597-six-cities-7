import React, {useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { connect } from 'react-redux';

import offerProp from '../props/offer.prop';

import useMap from '../../hooks/useMap/useMap';


const defaultCustomIcon = leaflet.icon({
  iconUrl: 'img/pin.svg',
  iconSize: [26, 40],
  iconAnchor: [13, 40],
});

const currentCustomIcon = leaflet.icon({
  iconUrl: 'img/pin-active.svg',
  iconSize: [26, 40],
  iconAnchor: [13, 40],
});


function Map(props) {
  const {city, offers, activeCard } = props;
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    const markers = leaflet.layerGroup();
    if (map) {
      markers.addTo(map);
      offers.forEach(({ location: { latitude, longitude }, id }) => {
        leaflet
          .marker({
            lat: latitude,
            lng: longitude,
          }, {
            icon: activeCard === id ? currentCustomIcon : defaultCustomIcon,
          })
          .addTo(markers);
      });
      map.flyTo(
        [offers[0].city.location.latitude, offers[0].city.location.longitude],
        offers[0].city.location.zoom,
      );
    }
    return () => {
      markers.clearLayers();
    };

  }, [map, offers, activeCard, city]);

  return (
    <div
      style={{height: '100%'}}
      ref={mapRef}
    >
    </div>
  );
}

Map.propTypes = {
  offers: PropTypes.arrayOf(offerProp).isRequired,
  city: PropTypes.shape({
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired,
    }),
    name: PropTypes.string.isRequired,
  }),
  activeCard: PropTypes.number,
};

const mapStateToProps = ({ activeCard }) => ({ activeCard });

export default connect(mapStateToProps)(Map);

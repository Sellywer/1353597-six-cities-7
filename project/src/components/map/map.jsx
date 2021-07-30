import React, {useRef, useEffect, memo} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {useSelector} from 'react-redux';

import {getActiveOfferId} from '../../store/ui/selectors';

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
  const {city, offers} = props;
  const activeOfferId  = useSelector(getActiveOfferId);
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    const markers = leaflet.layerGroup();
    if (map) {
      markers.addTo(map);
      offers.forEach(({ location: {latitude, longitude}, id }) => {
        leaflet
          .marker({
            lat: latitude,
            lng: longitude,
          }, {
            icon: activeOfferId === id ? currentCustomIcon : defaultCustomIcon,
          })
          .addTo(markers);
      });
      map.flyTo(
        [offers[0].city.location.latitude, offers[0].city.location.longitude],
        offers[0].city.location.zoom,
      );
      map.scrollWheelZoom.disable();
    }
    return () => {
      markers.clearLayers();
    };

  }, [map, offers, activeOfferId, city]);

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
};

export default memo(Map);

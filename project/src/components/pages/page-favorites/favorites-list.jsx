import React from 'react';
import PropTypes from 'prop-types';

import offersProp from '../../props/offers.prop';
import FavoritesItem from './favorites-item';

function FavoritesList(props) {

  const {offers} = props;

  const favoritesOffers = offers.filter((item) => item.isFavorite);
  const uniqueCities = new Set();

  favoritesOffers.forEach((item) => uniqueCities.add(item.city.name));

  const favoritesCities = [...uniqueCities.values()];

  return (
    <ul className="favorites__list">
      {favoritesCities.map((item) => (
        <FavoritesItem
          key={item}
          favoritesOffers={favoritesOffers}
          favoritesCity={item}
        />
      ))}
    </ul>
  );
}

FavoritesList.propTypes = {
  offers: PropTypes.arrayOf(offersProp).isRequired,
};

export default FavoritesList;

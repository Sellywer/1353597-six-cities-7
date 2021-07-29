import React from 'react';
import PropTypes from 'prop-types';

import offerProp from '../../props/offer.prop';
import FavoritesItem from '../favorites-item/favorites-item';

function FavoritesList({favoritesOffers}) {

  const favoritesCities = [...new Set(favoritesOffers.map((offer) => offer.city.name))];

  return (
    <ul className="favorites__list">
      {favoritesCities.map((city) => (
        <FavoritesItem
          key={city}
          favoritesOffers={favoritesOffers}
          favoritesCity={city}
        />
      ))}
    </ul>
  );
}

FavoritesList.propTypes = {
  favoritesOffers: PropTypes.arrayOf(offerProp).isRequired,
};

export default FavoritesList;

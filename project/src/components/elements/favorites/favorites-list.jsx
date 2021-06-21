import React from 'react';
import PropTypes from 'prop-types';

import offerProp from '../../props/offer.prop';
import FavoritesItem from './favorites-item';

function FavoritesList(props) {

  const {favoritesOffers, favoritesCities} = props;

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
  favoritesOffers: PropTypes.arrayOf(offerProp).isRequired,
  favoritesCities: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default FavoritesList;

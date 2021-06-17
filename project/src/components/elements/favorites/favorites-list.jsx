import React from 'react';
import PropTypes from 'prop-types';

import offerProp from '../../props/offer.prop';
import FavoritesItem from './favorites-item';

function FavoritesList(props) {

  const {offers} = props;

  const favoritesOffers = offers.filter((item) => item.isFavorite);

  const favoritesCities = [...new Set(favoritesOffers.map((item) => item.city.name))];

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
  offers: PropTypes.arrayOf(offerProp).isRequired,
};

export default FavoritesList;

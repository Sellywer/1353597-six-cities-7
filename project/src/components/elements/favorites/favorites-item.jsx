import React from 'react';
import PropTypes from 'prop-types';

import offerProp from '../../props/offer.prop';

import FavoriteCard from './favorite-card';

function FavoritesItem(props) {

  const {favoritesOffers, favoritesCity} = props;

  const offers = favoritesOffers.filter((item) => item.city.name === favoritesCity);

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#/">
            <span>{favoritesCity}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((item) => (<FavoriteCard key={item.id} offer={item} />))}
      </div>
    </li>
  );
}

FavoritesItem.propTypes = {
  favoritesOffers: PropTypes.arrayOf(offerProp).isRequired,
  favoritesCity: PropTypes.string.isRequired,
};

export default FavoritesItem;

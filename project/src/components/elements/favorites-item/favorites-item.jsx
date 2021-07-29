import React from 'react';
import PropTypes from 'prop-types';

import offerProp from '../../props/offer.prop';

import PlaceCard from '../place-card/place-card';

import {CardType} from '../../../const';

function FavoritesItem(props) {

  const {favoritesOffers, favoritesCity} = props;

  const offers = favoritesOffers.filter((offer) => offer.city.name === favoritesCity);

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
        {offers.map((offer) => (
          <PlaceCard key={offer.id} offer={offer} cardType={CardType.FAVORITES_PAGE}/>))}
      </div>
    </li>
  );
}

FavoritesItem.propTypes = {
  favoritesOffers: PropTypes.arrayOf(offerProp).isRequired,
  favoritesCity: PropTypes.string.isRequired,
};

export default FavoritesItem;

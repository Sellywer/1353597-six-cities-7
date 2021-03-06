import React from 'react';
import PropTypes from 'prop-types';

import PlaceCard from '../../elements/place-card/place-card';
import {CardType} from '../../../const';
import offerProp from '../../props/offer.prop';

function CardList(props) {
  const {offers, isMainPage = true} = props;

  return (
    <div className={isMainPage
      ? 'cities__places-list places__list tabs__content'
      : 'near-places__list places__list'}
    >
      {offers.map((offer) => (
        <PlaceCard
          isMainPage={isMainPage}
          key={offer.id}
          offer={offer}
          cardType={CardType[`${isMainPage ? 'MAIN_PAGE' : 'ROOM_PAGE'}`]}
        />))}
    </div>
  );
}

CardList.propTypes = {
  offers: PropTypes.arrayOf(offerProp).isRequired,
  isMainPage: PropTypes.bool,
};

export default CardList;

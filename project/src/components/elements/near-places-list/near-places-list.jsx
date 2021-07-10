import React from 'react';
import PropTypes from 'prop-types';

import offerProp from '../../props/offer.prop';
import PlaceCard from '../place-card/place-card';
import {CardType} from '../../../const';

function NearPlacesList({ nearOffers }) {
  return (
    <div className="near-places__list places__list">
      {
        nearOffers.map((offer) => <PlaceCard key={offer.id} offer={offer} cardType={CardType.ROOM_PAGE} />)
      }
    </div>
  );
}


NearPlacesList.propTypes = {
  nearOffers: PropTypes.arrayOf(offerProp).isRequired,
};

export default NearPlacesList;

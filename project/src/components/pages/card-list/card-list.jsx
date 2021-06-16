import React from 'react';
import PropTypes from 'prop-types';

import PlaceCard from '../../elements/place-card/place-card';
import offerProp from '../../props/offer.prop';

function CardList(props) {
  const {offers} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((item) => <PlaceCard key={item.id} offer={item} />)}
    </div>
  );
}

CardList.propTypes = {
  offers: PropTypes.arrayOf(offerProp).isRequired,
};

export default CardList;

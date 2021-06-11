import React from 'react';
import PropTypes from 'prop-types';

import PlaceCard from '../../place-card/place-card';
import offersProp from '../../props/offers.prop';

function CardsList(props) {
  const {offers} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((item) => <PlaceCard key={item.id} offer={item} />)}
    </div>
  );
}

CardsList.propTypes = {
  offers: PropTypes.arrayOf(offersProp).isRequired,
};

export default CardsList;

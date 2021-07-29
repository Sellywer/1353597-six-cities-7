import React from 'react';
import PropTypes from 'prop-types';

import offerProp from '../../props/offer.prop';

import NearPlacesList from '../near-places-list/near-places-list';


function NearPlaces({offers}) {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <NearPlacesList nearOffers={offers} />
    </section>
  );
}

NearPlaces.propTypes = {
  offers: PropTypes.arrayOf(offerProp).isRequired,
};
export default NearPlaces;

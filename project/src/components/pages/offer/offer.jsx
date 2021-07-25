import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {useParams} from 'react-router-dom';

import {getOffers, getReviews, getNearbyOffers, getOfferLoadedDataStatus} from '../../../store/data/selectors';

import Header from '../../elements/header/header';
import { fetchReviewList, fetchOffer, fetchOffersNearby } from '../../../store/api-actions';

import Property from '../../elements/property/property';
import PageNotFound from '../page-not-found/page-not-found';

import offerProp from '../../props/offer.prop';
import reviewsProp from '../../props/review.prop';

function Offer(props) {

  const {offers = [], reviews = [], offersNearby=[], loadReviewList, loadOfferData, areLoadedOffersNearby } = props;

  const GetId = () => {
    const { id } = useParams();
    return Number(id);
  };

  const roomId = GetId();

  const offer = offers.find((item) => item.id === roomId);

  useEffect(() => {
    loadOfferData(roomId);
    loadReviewList(roomId);
    areLoadedOffersNearby(roomId);
  }, [roomId, loadOfferData, loadReviewList, areLoadedOffersNearby]);

  if (offer === undefined) {
    return (
      <PageNotFound />
    );
  }

  return (
    <div className="page" >
      <Header />
      <main className="page__main page__main--property">
        <Property
          offer={offer}
          reviews={reviews}
          offersNearby={offersNearby}
        />
      </main>
    </div>
  );
}

Offer.propTypes = {
  offers: PropTypes.arrayOf(offerProp).isRequired,
  reviews: PropTypes.arrayOf(reviewsProp).isRequired,
  offersNearby: PropTypes.arrayOf(offerProp).isRequired,
  loadReviewList: PropTypes.func.isRequired,
  loadOfferData: PropTypes.func.isRequired,
  areLoadedOffersNearby: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  offers: getOffers(state),
  reviews: getReviews(state),
  offersNearby: getNearbyOffers(state),
  isOfferLoaded: getOfferLoadedDataStatus(state),
});

const mapDispatchToProps = {
  loadReviewList: fetchReviewList,
  loadOfferData: fetchOffer,
  areLoadedOffersNearby: fetchOffersNearby,
};


export default connect(mapStateToProps, mapDispatchToProps)(Offer);

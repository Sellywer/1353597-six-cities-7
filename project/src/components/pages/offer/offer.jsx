import React, { useEffect } from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import {getOffers, getReviews, getNearbyOffers, getFavorites} from '../../../store/data/selectors';

import Header from '../../elements/header/header';
import { fetchReviewList, fetchOffer, fetchOffersNearby } from '../../../store/api-actions';

import Property from '../../elements/property/property';
import PageNotFound from '../page-not-found/page-not-found';

function Offer() {

  const dispatch = useDispatch();
  const offers = useSelector(getOffers);
  const reviews = useSelector(getReviews);
  const offersNearby = useSelector(getNearbyOffers);
  const offersFavorite = useSelector(getFavorites);

  const GetId = () => {
    const { id } = useParams();
    return Number(id);
  };

  const roomId = GetId();

  const offer = offers.find((item) => item.id === roomId);

  useEffect(() => {
    dispatch(fetchOffer(roomId));
    dispatch(fetchReviewList(roomId));
    dispatch(fetchOffersNearby(roomId));
  }, [roomId, dispatch]);

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
          offersFavorite={offersFavorite}
        />
      </main>
    </div>
  );
}

export default Offer;

import {createReducer} from '@reduxjs/toolkit';

import {
  loadOffers,
  loadOffer,
  loadReviews,
  loadOffersNearby,
  changeCommentSendingStatus,
  loadFavorites,
  updateFavorites
  //setRoomLoadingStatus
} from '../action';

const initialState = {
  offers: [],
  offer: {},
  reviews: [],
  isDataLoaded: false,
  isOfferLoaded: false,
  areReviewsLoaded: false,
  areLoadedOffersNearby: false,
  offersNearby: [],
  isCommentSend: false,
};

const data = createReducer(initialState, (builder) => {
  builder
    .addCase(loadFavorites, (state, action) => {
      state.favorites = action.payload;
    })
    .addCase(updateFavorites, (state, action) => {
      const updatedOffer = action.payload;
      const idx = state.offers.findIndex((offer) => offer.id === updatedOffer.id);
      state.offers = [
        ...state.offers.slice(0, idx),
        updatedOffer,
        ...state.offers.slice(idx + 1),
      ];
    })
    .addCase(loadOffers, (state, action) => {
      state.isDataLoaded = true;
      state.offers = action.payload;
    })
    .addCase(loadOffer, (state, action) => {
      state.isOfferLoaded = true;
      state.offer = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(loadOffersNearby, (state, action) => {
      state.offersNearby = action.payload;
    })
    .addCase(changeCommentSendingStatus, (state, action) => {
      state.isCommentSend = action.payload;
    });
  /*  .addCase(setRoomLoadingStatus, (state, action) => {
      state.isOfferLoaded = action.payload;
    }); */
  /*  .addCase(setRoomLoadingStatus, (state, action) => {
      state.isOfferLoaded = action.payload;
    }); */
  /*  .addCase(хз, (state, action) => {
      state.areLoadedOffersNearby = action.payload;
    }); */
});

export {data};

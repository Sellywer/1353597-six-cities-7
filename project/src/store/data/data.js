import {createReducer} from '@reduxjs/toolkit';

import {
  loadOffers,
  loadOffer,
  loadReviews,
  loadOffersNearby,
  changeCommentSendingStatus
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
  /*  .addCase(хз, (state, action) => {
      //         ...state,
//         ...state.detailedData,
//         reviews: action.payload,
      state.reviews = action.payload;
    }); */
});

export {data};

import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_CITY: '/changeCity',
  FILTER_OFFERS: 'offers/filterOffers',
  SET_ACTIVE_OFFER: 'offers/setActiveOffer',
  LOAD_OFFERS: 'data/loadOffers',
  LOAD_OFFER: 'data/loadOffer',
  LOAD_REVIEWS: 'data/loadReviews',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',
  REDIRECT_TO_ROUTE: 'cities/redirectToRoute',
  SET_USER: 'user/setUser',
  LOAD_COMMENTS: 'comments/loadComments',
  LOAD_OFFERS_NEARBY: 'data/loadOffersNearby',
  SET_IS_OFFER_DATA_LOADED: 'offers/setIsOfferDataLoaded',
  UPDATE_REVIEWS: 'comments/updateReviews',
  CHANGE_COMMENT_SENDING_STATUS: 'changeCommentSendingStatus',
  ADD_COMMENT: 'addComment',
  ADD_RATING: 'addRating',
};

export const updateReviews = createAction(ActionType.UPDATE_REVIEWS, (reviews) => ({
  payload: reviews,
}));

export const changeCommentSendingStatus = createAction(ActionType.CHANGE_COMMENT_SENDING_STATUS, (status) => ({
  payload: status,
}));

export const addRating = createAction(ActionType.ADD_RATING, (rating) => ({
  payload: rating,
}));

export const changeCity = createAction(ActionType.CHANGE_CITY, (city) => ({
  payload: city,
}));

export const requireAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION, (status) => ({
  payload: status,
}));

export const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (url) => ({
  payload: url,
}));

export const makeLogout = createAction(ActionType.LOGOUT);

export const filterOffers = createAction(ActionType.FILTER_OFFERS);

export const setUser = createAction(ActionType.SET_USER, (userData) => ({
  payload: userData,
}));

export const setActiveOffer = createAction(ActionType.SET_ACTIVE_OFFER, (activeOfferId) => ({
  payload: activeOfferId,
}));

export const setOfferLoadingStatus = createAction(ActionType.SET_IS_OFFER_DATA_LOADED, (isLoaded) => ({
  payload: !isLoaded,
}));

export const loadOffers = createAction(ActionType.LOAD_OFFERS, (offers) => ({
  payload: offers,
}));

export const loadOffer = createAction(ActionType.LOAD_OFFER, (offer) => ({
  payload: offer,
}));

export const loadReviews = createAction(ActionType.LOAD_REVIEWS, (reviews) => ({
  payload: reviews,
}));

export const loadOffersNearby = createAction(ActionType.LOAD_OFFERS_NEARBY, (offers) => ({
  payload: offers,
}));

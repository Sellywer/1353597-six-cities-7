import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_CITY: 'ui/changeCity',
  CHANGE_SORT_TYPE: 'ui/changeSortType',
  SET_ACTIVE_OFFER: 'ui/setActiveOffer',
  LOAD_OFFERS: 'data/loadOffers',
  LOAD_OFFER: 'data/loadOffer',
  LOAD_REVIEWS: 'data/loadReviews',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',
  REDIRECT_TO_ROUTE: 'cities/redirectToRoute',
  SET_USER: 'user/setUser',
  LOAD_COMMENTS: 'data/loadComments',
  LOAD_OFFERS_NEARBY: 'data/loadOffersNearby',
  SET_IS_OFFER_DATA_LOADED: 'data/setIsOfferDataLoaded',
  UPDATE_REVIEWS: 'data/updateReviews',
  CHANGE_COMMENT_SENDING_STATUS: 'changeCommentSendingStatus',
  LOAD_FAVORITES: 'data/loadFavorites',
  UPDATE_FAVORITES: 'data/updateFavorites',
};

export const loadFavorites = createAction(ActionType.LOAD_FAVORITES, (payload) => ({
  payload,
}));

export const updateFavorites = createAction(ActionType.UPDATE_FAVORITES, (payload) => ({
  payload,
}));

export const updateReviews = createAction(ActionType.UPDATE_REVIEWS, (reviews) => ({
  payload: reviews,
}));

export const changeCommentSendingStatus = createAction(ActionType.CHANGE_COMMENT_SENDING_STATUS, (status) => ({
  payload: status,
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

export const changeSortType = createAction(ActionType.CHANGE_SORT_TYPE, (sortType) => ({
  payload: sortType,
}));

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

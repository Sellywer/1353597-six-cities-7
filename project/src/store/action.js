export const ActionType = {
  CHANGE_CITY: '/changeCity',
  FILTER_OFFERS: 'offers/filterOffers',
  HOVER_CARD: 'card/hoverCard',
  LOAD_OFFERS: 'data/loadOffers',
  LOAD_OFFER: 'data/loadOffer',
  LOAD_REVIEWS: 'data/loadReviews',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',
  REDIRECT_TO_ROUTE: 'cities/redirectToRoute',
  SET_USER: 'user/setUser',
  LOAD_COMMENTS: 'comments/loadComments',
  LOAD_OFFERS_NEARBY: 'data/loadOffersNearby',
  UPDATE_REVIEWS: 'comments/updateReviews',
  SET_IS_OFFER_DATA_LOADED: 'offers/setIsOfferDataLoaded',
};

export const changeCity = (city) => ({
  type: ActionType.CHANGE_CITY,
  payload: city,
});

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});

export const makeLogout = () => ({
  type: ActionType.LOGOUT,
});

export const filterOffers = () => ({
  type: ActionType.FILTER_OFFERS,
});

export const setUser = (userData) => ({
  type: ActionType.SET_USER,
  payload: userData,
});

export const updateReviews = (reviews) => ({
  type: ActionType.UPDATE_REVIEWS,
  payload: reviews,
});

export const hoverCard = (id) => ({
  type: ActionType.HOVER_CARD,
  payload: id,
});

export const setOfferLoadingStatus = (isLoaded) => ({
  type: ActionType.SET_IS_OFFER_DATA_LOADED,
  payload: !isLoaded,
});

export const loadOffers = (offers) => ({
  type: ActionType.LOAD_OFFERS,
  payload: offers,
});

export const loadOffer = (offer) => ({
  type: ActionType.LOAD_OFFER,
  payload: offer,
});

export const loadReviews = (reviews) => ({
  type: ActionType.LOAD_REVIEWS,
  payload: reviews,
});

export const loadOffersNearby = (offers) => ({
  type: ActionType.LOAD_OFFERS_NEARBY,
  payload: offers,
});

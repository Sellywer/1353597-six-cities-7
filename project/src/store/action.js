export const ActionType = {
  CHANGE_CITY: '/changeCity',
  FILTER_OFFERS: 'offers/filterOffers',
  HOVER_CARD: 'card/hoverCard',
  LOAD_OFFERS: 'offers/loadOffers',
  LOAD_REVIEWS: 'reviews/loadReviews',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',
  REDIRECT_TO_ROUTE: 'cities/redirectToRoute',
  SET_USER: 'user/setUser',
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  filterOffers: () => ({
    type: ActionType.FILTER_OFFERS,
  }),
  hoverCard: (id) => ({
    type: ActionType.HOVER_CARD,
    payload: id,
  }),
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers,
  }),
  loadReviews: (reviews) => ({
    type: ActionType.LOAD_REVIEWS,
    payload: reviews,
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
  setUser: (userData) => ({
    type: ActionType.SET_USER,
    payload: userData,
  }),
};

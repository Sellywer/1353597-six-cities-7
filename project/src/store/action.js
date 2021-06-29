export const ActionType = {
  CHANGE_CITY: '/changeCity',
  FILTER_OFFERS: 'offers/filterOffers',
  HOVER_CARD: 'card/hoverCard',
  LOAD_OFFERS: 'offers/loadOffers',
  LOAD_REVIEWS: 'reviews/loadReviews',
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
};

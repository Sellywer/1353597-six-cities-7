export const ActionType = {
  CHANGE_CITY: '/changeCity',
  FILTER_OFFERS_LIST: 'offers/filterOffersList',
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  filterOffersList: () => ({
    type: ActionType.FILTER_OFFERS_LIST,
  }),
};

import {ActionType} from '../action';

const initialState = {
  offers: [],
  offer: {},
  reviews: [],
  isDataLoaded: false,
  isOfferLoaded: false,
  areReviewsLoaded: false,
  areLoadedOffersNearby: false,
  offersNearby: [],
};

const data = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: action.payload,
        isDataLoaded: true,
      };
    case ActionType.LOAD_OFFER:
      return {
        ...state,
        offer: action.payload,
        isOfferLoaded: true,
      };
    case ActionType.LOAD_REVIEWS:
      return {
        ...state,
        reviews: action.payload,
      };
    case ActionType.SET_ARE_LOADED_OFFERS_NEARBY:
      return {
        ...state,
        areLoadedOffersNearby: action.payload,
      };
    case ActionType.LOAD_OFFERS_NEARBY:
      return {
        ...state,
        offersNearby: action.payload,
      };
    case ActionType.UPDATE_REVIEWS:
      return {
        ...state,
        ...state.detailedData,
        reviews: action.payload,
      };
    default:
      return state;
  }
};

export {data};

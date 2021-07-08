import {ActionType} from './action';
import {AuthorizationStatus} from '../const';

const DEFAULT_CITY = 'Paris';

const initialState = {
  city: DEFAULT_CITY,
  offers: [],
  reviews: [],
  activeCard: null,
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  isDataLoaded: false,
  isOfferLoaded: false,
  areReviewsLoaded: false,
  areLoadedOffersNearby: false,
  offersNearby: [],
  user: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload,
      };
    case ActionType.FILTER_OFFERS:
      return {
        ...state,
        offers: action.payload,
      };
    case ActionType.HOVER_CARD:
      return {
        ...state,
        activeCard: action.payload,
      };
    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: action.payload,
        isDataLoaded: true,
      };
    case ActionType.LOAD_REVIEWS:
      return {
        ...state,
        reviews: action.payload,
      };
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.LOGOUT:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      };
    case ActionType.SET_USER:
      return {
        ...state,
        user: action.payload,
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

export {reducer};

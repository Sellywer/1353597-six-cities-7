import {ActionType} from './action';
import offers from '../mock/offers';

const DEFAULT_CITY = 'Paris';

const initialState = {
  city: DEFAULT_CITY,
  offers: offers,
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
    default:
      return state;
  }
};


export {reducer};
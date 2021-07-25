import {ActionType} from '../action';
import {SortType} from '../../const';


const DEFAULT_CITY = 'Paris';

const initialState = {
  city: DEFAULT_CITY,
  activeCard: null,
  sortType: SortType.POPULAR,
};

const ui = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload,
      };
    case ActionType.FILTER_OFFERS:
      return {
        ...state,
        sortType: action.payload,
      };
    case ActionType.HOVER_CARD:
      return {
        ...state,
        activeCard: action.payload,
      };
    default:
      return state;
  }
};

export {ui};

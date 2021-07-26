import {createReducer} from '@reduxjs/toolkit';
import {changeCity, filterOffers, hoverCard} from '../action';
import {SortType} from '../../const';


const DEFAULT_CITY = 'Paris';

const initialState = {
  city: DEFAULT_CITY,
  activeCard: null,
  sortType: SortType.POPULAR,
};

const ui = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(filterOffers, (state, action) => {
      state.sortType = action.payload;
    })
    .addCase(hoverCard, (state, action) => {
      state.activeCard = action.payload;
    });
});

export {ui};

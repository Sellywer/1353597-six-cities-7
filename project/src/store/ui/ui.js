import {createReducer} from '@reduxjs/toolkit';
import {changeCity, changeSortType, setActiveOffer} from '../action';
import {SortTypes} from '../../const';


const DEFAULT_CITY = 'Paris';

const initialState = {
  city: DEFAULT_CITY,
  activeOfferId: null,
  sortType: SortTypes.POPULAR,
};

const ui = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(changeSortType, (state, action) => {
      state.sortType = action.payload;
    })
    .addCase(setActiveOffer, (state, action) => {
      state.activeOfferId = action.payload;
    });
});

export {ui};

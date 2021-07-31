import {createReducer} from '@reduxjs/toolkit';
import {changeCity, changeSortType} from '../action';
import {SortType} from '../../const';


const DEFAULT_CITY = 'Paris';

const initialState = {
  city: DEFAULT_CITY,
  sortType: SortType.POPULAR,
};

const ui = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(changeSortType, (state, action) => {
      state.sortType = action.payload;
    /*    })

    .addCase(loadOffer, (state, action) => {
      state.activeOfferId = action.payload.id;*/
    });
});

export {ui};

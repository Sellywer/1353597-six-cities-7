import {createReducer} from '@reduxjs/toolkit';

import {requireAuthorization, setUser, makeLogout} from '../action';
import {AuthorizationStatus} from '../../const';

const initialState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  user: {},
};

const user = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUser, (state, action) => {
      state.user = action.payload;
    })
    .addCase(makeLogout, (state, action) => {
      state.user = {};
      state.authorizationStatus = AuthorizationStatus.NO_AUTH;
    });
});

export {user};

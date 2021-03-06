import { NameSpace } from '../root-reducer';

export const getAuthorizationStatus = (state) => state[NameSpace.USER].authorizationStatus;
export const getUserData = (state) => state[NameSpace.USER].user;

export const getUserEmail = (state) => state[NameSpace.USER].user.email;

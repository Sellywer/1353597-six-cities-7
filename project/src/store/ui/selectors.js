import {NameSpace} from '../root-reducer';

export const getCity = (state) => state[NameSpace.UI].city;
export const getActiveSortTypes = (state) => state[NameSpace.UI].sortType;
export const getActiveOfferId = (state) => state[NameSpace.UI].activeOfferId;

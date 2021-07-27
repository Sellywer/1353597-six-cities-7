import {NameSpace} from '../root-reducer';

export const getCity = (state) => state[NameSpace.UI].city;
export const getSortType = (state) => state[NameSpace.UI].sortType;
export const getActiveOfferId = (state) => state[NameSpace.UI].activeOfferId;

import {NameSpace} from '../root-reducer';

export const getCity = (state) => state[NameSpace.UI].city;
export const getSortType = (state) => state[NameSpace.UI].sortType;

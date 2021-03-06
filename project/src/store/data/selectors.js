import {NameSpace} from '../root-reducer';

export const getOffers = (state) => state[NameSpace.DATA].offers;
export const getOffer = (state) => state[NameSpace.DATA].offer;
export const getReviews = (state) => state[NameSpace.DATA].reviews;
export const getNearbyOffers= (state) => state[NameSpace.DATA].offersNearby;
export const getLoadedDataStatus = (state) => state[NameSpace.DATA].isDataLoaded;

export const getCommentSendingStatus = (state) => state[NameSpace.DATA].isCommentSent;
export const getFavorites = (state) => state[NameSpace.DATA].favorites;

export const getActiveOfferId = (state) => state[NameSpace.DATA].activeOfferId;

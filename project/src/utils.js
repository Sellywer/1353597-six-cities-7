import {SortTypes} from './const';

export const calcRatingInPercent = (rating) => `${rating / 5 * 100}%`;

export const sortOffers = (sortType, offers) => {
  switch (sortType) {
    case SortTypes.PRICE_LOW:
      return offers.slice().sort((a, b) => a.price - b.price);
    case SortTypes.PRICE_HIGH:
      return offers.slice().sort((a, b) => b.price - a.price);
    case SortTypes.TOP_RATED:
      return offers.slice().sort((a, b) => b.rating - a.rating);
    case SortTypes.POPULAR:
    default:
      return offers;
  }
};

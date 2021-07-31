import {SortType} from './const';

export const getRatingInPercent = (rating) => `${rating / 5 * 100}%`;

export const uppercaseFirstLetter = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1);

export const sortOffers = (sortType, offers) => {
  switch (sortType) {
    case SortType.PRICE_LOW:
      return offers.slice().sort((a, b) => a.price - b.price);
    case SortType.PRICE_HIGH:
      return offers.slice().sort((a, b) => b.price - a.price);
    case SortType.TOP_RATED:
      return offers.slice().sort((a, b) => b.rating - a.rating);
    case SortType.POPULAR:
    default:
      return offers;
  }
};

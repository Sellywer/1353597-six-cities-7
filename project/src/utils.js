import {SortType} from './const';

export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

export const getRandomArray = (array, min, max) => {
  const copyArray = array.slice();
  shuffle(copyArray);

  const arrayLength = getRandomInteger(min, max);

  const newArray = [];
  for (let i = 0; i < arrayLength; i++) {
    newArray.push(copyArray[i]);
  }
  return newArray;
};

export const calcRatingInPercent = (rating) => `${rating / 5 * 100}%`;


export const sortOffers = (sortType, offers) => {
  switch (sortType) {
    case SortType.LOW_TO_HIGH:
      return offers.sort((a, b) => a.price - b.price);
    case SortType.HIGH_TO_LOW:
      return offers.sort((a, b) => b.price - a.price);
    case SortType.TOP_RATED:
      return offers.sort((a, b) => b.rating - a.rating);
    default:
      return offers;
  }
};

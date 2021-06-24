export const AppRoute = {
  MAIN: '/',
  SIGN_IN: '/login',
  FAVORITES: '/favorites',
  ROOM: '/offer/:id',
};

export const CardType = {
  MAIN_PAGE: {
    articleClassName: 'cities__place-card',
    imgWrapperClassName: 'cities__image-wrapper',
    cardInfoClassName: '',
    hasPremiumMark: true,
    imgWidth: '260',
    imgHeight: '200',
  },
  FAVORITES_PAGE: {
    articleClassName: 'favorites__card',
    imgWrapperClassName: 'favorites__image-wrapper',
    cardInfoClassName: 'favorites__card-info',
    hasPremiumMark: false,
    imgWidth: '150',
    imgHeight: '110',
  },
  ROOM_PAGE: {
    articleClassName: 'near-places__card',
    imgWrapperClassName: 'near-places__image-wrapper',
    cardInfoClassName: '',
    hasPremiumMark: false,
    imgWidth: '260',
    imgHeight: '200',
  },
};

export const QUANTITY_OF_OFFERS_NEARBY = 3;

export const CITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

export const SortType = {
  POPULAR: 'Popular',
  LOW: 'Price: low to high',
  HIGH: 'Price: high to low',
  TOP: 'Top rated first',
};

export const DEFAULT_SORT_TYPE = SortType.POPULAR;

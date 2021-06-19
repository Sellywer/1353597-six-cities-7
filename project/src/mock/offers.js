const AVATAR_URL = 'https://i.pravatar.cc/128';

const offers = [
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 1,
      isPro: true,
      name: 'Angelina',
    },
    id: 1,
    images: ['img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/room.jpg', 'img/studio-01.jpg'],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
    maxAdults: 4,
    previewImage: 'img/apartment-01.jpg',
    price: 120,
    rating: 3.8,
    title: 'Beautiful & luxurious studio at great location',
    type: 'Apartment',
  },

  {
    bedrooms: 2,
    city: {
      location: {
        latitude: 52.369553943508,
        longitude: 4.85309666406198,
        zoom: 10,
      },
      name: 'Paris',
    },
    description: 'One of the most famous cities in the world, Paris captivates guests from the first minute, at a glance.',
    goods: ['Attic', 'Kitchen', 'Telescope', 'Washing machine', 'Coffee machine', 'Jacuzzi'],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 2,
      isPro: true,
      name: 'Max',
    },
    id: 2,
    images: ['img/apartment-01.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg'],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 52.369553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
    maxAdults: 3,
    previewImage: 'img/apartment-02.jpg',
    price: 340,
    rating: 4.9,
    title: 'This hotel is a symbol of love and romance, fashion and sophistication.',
    type: 'Hotel',
  },

  {
    bedrooms: 6,
    city: {
      location: {
        latitude: 52.3909553943508,
        longitude: 4.929309666406198,
        zoom: 10,
      },
      name: 'Copenhagen ',
    },
    description: 'The world famous sculpture "The Little Mermaid" is located in Copenhagen.',
    goods: ['Cable TV', 'Kitchen', 'Round Bed', 'Dishwasher', 'Coffee machine', 'Park View'],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 3,
      isPro: true,
      name: 'Miranda',
    },
    id: 3,
    images: ['img/apartment-01.jpg', 'img/studio-01.jpg'],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 8,
    },
    maxAdults: 10,
    previewImage: 'img/apartment-03.jpg',
    price: 180,
    rating: 4.6,
    title: 'Christianshavn is a good choice for travelers interested in design, atmosphere and culture.',
    type: 'House',
  },

  {
    bedrooms: 1,
    city: {
      location: {
        latitude: 52.3809553943508,
        longitude: 4.939309666406198,
        zoom: 10,
      },
      name: 'Sofia',
    },
    description: 'On the coat of arms of Sofia it is written - "It grows, but does not age".',
    goods: ['TV', 'Kitchen', 'Bath', 'Coffee machine', 'Breakfast'],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 4,
      isPro: false,
      name: 'Katerina',
    },
    id: 4,
    images: ['img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg'],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 8,
    },
    maxAdults: 3,
    previewImage: 'img/apartment-02.jpg',
    price: 130,
    rating: 4.3,
    title: 'The room is located at the foot of the mountains.',
    type: 'Room',
  },
];

export default offers;

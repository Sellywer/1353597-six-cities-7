const AVATAR_URL = 'https://i.pravatar.cc/128';

const reviews = [
  {
    comment: 'Vacation or business trip, no matter where you go, be sure, it is much more convenient to reside in a good hotel than look for a flat, a room or a hostel. If you prefer comfort and modern conveniences, hotels are the best choice.',
    date: '2019-05-08T14:13:56.569Z',
    id: 1,
    rating: 5,
    user: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 1,
      isPro: true,
      name: 'Mike',
    },
  },

  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: '2020-07-09T16:10:56.569Z',
    id: 2,
    rating: 3,
    user: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 2,
      isPro: true,
      name: 'Max',
    },
  },

  {
    comment: 'We are staying at an excellent four star hotel. Our hotel was right next to the sea and a nice sandy beach.',
    date: '2021-02-18T23:13:56.569Z',
    id: 3,
    rating: 5,
    user: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 3,
      isPro: false,
      name: 'Sheldon',
    },
  },

  {
    comment: 'There was a big restaurant in our hotel. We had our breakfast there. The food at the restaurant was delicious and varied.',
    date: '2020-09-08T07:05:56.569Z',
    id: 4,
    rating: 5,
    user: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 4,
      isPro: false,
      name: 'Kristina',
    },
  },

  {
    comment: 'I really enjoyed our stay and I hope that one day we will return there!',
    date: '2019-05-08T14:13:56.569Z',
    id: 5,
    rating: 4,
    user: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 5,
      isPro: true,
      name: 'Sheila',
    },
  },

  {
    comment: 'The view from the balcony was unforgettable – serene infinite sea and lush greenery.',
    date: '2020-05-28T10:03:56.569Z',
    id: 6,
    rating: 3,
    user: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 6,
      isPro: true,
      name: 'Adel',
    },
  },

  {
    comment: 'Cozy and small hotel, enveloped in an atmosphere of ease, in which every guest will feel comfortable',
    date: '2021-05-08T16:24:56.569Z',
    id: 7,
    rating: 4,
    user: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 7,
      isPro: false,
      name: 'John',
    },
  },
];

export default reviews;

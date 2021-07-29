import React from 'react';
import {useSelector} from 'react-redux';

import {getOffers} from '../../../store/data/selectors';

import Header from '../../elements/header/header';
import FavoritesList from '../../elements/favorites-list/favorites-list';
import FavoritesEmpty from '../../elements/favorites-empty/favorites-empty';

function Favorites() {

  const offers = useSelector(getOffers);

  const favoritesOffers = offers.filter((item) => item.isFavorite);

  const favoritesCities = [...new Set(favoritesOffers.map((item) => item.city.name))];
  const areFavoritesEmpty = favoritesOffers.length === 0;

  return (
    <div className="page">
      <Header />
      <main className={`page__main page__main--favorites
        ${areFavoritesEmpty && ('page__main--favorites-empty')}`}
      >
        <div className="page__favorites-container container">
          <section className={`favorites
            ${areFavoritesEmpty && ('favorites--empty')}`}
          >
            {
              areFavoritesEmpty ? (
                <h1 className="visually-hidden">Favorites (empty)</h1>) :
                (
                  <h1 className="favorites__title">Saved listing</h1>
                )
            }
            {
              areFavoritesEmpty ? (
                <FavoritesEmpty/>) : (
                <FavoritesList
                  favoritesCities={favoritesCities}
                  favoritesOffers={favoritesOffers}
                />)
            }
          </section>
        </div>
      </main>
    </div>
  );
}

export default Favorites;

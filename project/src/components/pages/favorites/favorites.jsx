import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

import {getOffers} from '../../../store/data/selectors';

import Header from '../../elements/header/header';
import FavoritesList from '../../elements/favorites-list/favorites-list';
import FavoritesEmpty from '../../elements/favorites-empty/favorites-empty';

import {AppRoute } from '../../../const';

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
      <footer className="footer container">
        <Link className="footer__logo-link" to={AppRoute.MAIN}>
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width="64"
            height="33"
          />
        </Link>
      </footer>
    </div>
  );
}

export default Favorites;

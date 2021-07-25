import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import offerProp from '../../props/offer.prop';

import Header from '../../elements/header/header';
import FavoritesList from '../../elements/favorites/favorites-list';
import FavoritesEmpty from '../../elements/favorites/favorites-empty';

function PageFavorites(props) {

  const {offers} = props;

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

PageFavorites.propTypes = {
  offers: PropTypes.arrayOf(offerProp).isRequired,
};

const mapStateToProps = ({DATA}) => ({
  offers: DATA.offers,
});

export default connect(mapStateToProps)(PageFavorites);

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import offerProp from '../../props/offer.prop';

import Header from '../../elements/header/header';
import FavoritesList from '../../elements/favorites/favorites-list';

function PageFavorites(props) {

  const {offers} = props;

  const favoritesOffers = offers.filter((item) => item.isFavorite);

  const favoritesCities = [...new Set(favoritesOffers.map((item) => item.city.name))];


  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritesList favoritesCities={favoritesCities} favoritesOffers={favoritesOffers}/>
          </section>
        </div>
      </main>
    </div>
  );
}

PageFavorites.propTypes = {
  offers: PropTypes.arrayOf(offerProp).isRequired,
};

const mapStateToProps = ({offers}) => ({
  offers,
});

export default connect(mapStateToProps)(PageFavorites);

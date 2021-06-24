import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import MainEmpty from '../../elements/main-empty/main-empty';
import Header from '../../elements/header/header';
import Map from '../../map/map';
import CardList from '../card-list/card-list';
import CitiesList from '../../elements/cities-list/cities-list';
import SortForm from '../../elements/sort-form/sort-form';
import offerProp from '../../props/offer.prop';
import {CITIES, SortType} from '../../../const';

function Main(props) {

  const {offers, city} = props;
  const [ sortType, setSortType ] = useState(SortType.POPULAR);

  let offersForCity = offers.filter((o) => o.city.name === city);
  switch (sortType) {
    case SortType.LOW_TO_HIGH:
      offersForCity = offersForCity.sort((a, b) => a.price - b.price);
      break;
    case SortType.HIGH_TO_LOW:
      offersForCity = offersForCity.sort((a, b) => b.price - a.price);
      break;
    case SortType.TOP_RATED:
      offersForCity = offersForCity.sort((a, b) => b.rating - a.rating);
      break;
    default:
      break;
  }

  if (!offers.length) {
    return <MainEmpty locations={CITIES} />;
  }

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList locations={CITIES} />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {offersForCity.length} places to stay in {city}
              </b>
              <SortForm initialSorting={sortType} onSortingChange={setSortType}/>
              <div className="cities__places-list places__list tabs__content">
                <CardList offers={offersForCity} />
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map offers={offersForCity} city={offers[0].city}/>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

Main.propTypes = {
  offers: PropTypes.arrayOf(offerProp).isRequired,
  city: PropTypes.string.isRequired,
};

const mapStateToProps = ({ offers, city }) => ({
  offers,
  city,
});

export default connect(mapStateToProps)(Main);


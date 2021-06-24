import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import MainEmpty from '../../elements/main-empty/main-empty';
import Header from '../../elements/header/header';
import Map from '../../map/map';
import CardList from '../card-list/card-list';
import CitiesList from '../../elements/cities-list/cities-list';
import offerProp from '../../props/offer.prop';
import {CITIES} from '../../../const';

function Main(props) {

  const {offers, city} = props;
  const offersForCity = offers.filter((item) => item.city.name === city);
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
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex="0">
                  Popular
                  <svg className="places__sorting-arrow" style={{width: '7', height:'4'}}>
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opene">
                  <li className="places__option places__option--active" tabIndex="0">Popular</li>
                  <li className="places__option" tabIndex="0">Price: low to high</li>
                  <li className="places__option" tabIndex="0">Price: high to low</li>
                  <li className="places__option" tabIndex="0">Top rated first</li>
                </ul>
              </form>
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


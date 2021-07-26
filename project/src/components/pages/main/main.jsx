import React, { useState } from 'react';
import {useSelector} from 'react-redux';

import {getOffers} from '../../../store/data/selectors';
import {getCity} from '../../../store/ui/selectors';

import MainEmpty from '../../elements/main-empty/main-empty';
import Header from '../../elements/header/header';
import Map from '../../map/map';
import CardList from '../card-list/card-list';
import CitiesList from '../../elements/cities-list/cities-list';
import SortForm from '../../elements/sort-form/sort-form';
import {CITIES, SortType} from '../../../const';
import {sortOffers} from '../../../utils';


function Main() {

  const offers = useSelector(getOffers);
  const city = useSelector(getCity);

  const [ sortType, setSortType ] = useState(SortType.POPULAR);

  const offersForCity = sortOffers(sortType, offers).filter((offer) => offer.city.name === city);

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


export default Main;


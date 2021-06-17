import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

import Main from '../pages/main/main';
import PageFavorites from '../pages/favorites/favorites';
import Offer from '../pages/offer/offer';
import Login from '../pages/login/login';
import PageNotFound from '../pages/page-not-found/page-not-found';

import offerProp from '../props/offer.prop';
import reviewProp from '../props/review.prop';

import {AppRoute} from '../../const';

function App(props) {
  const {offers, reviews} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <Main offers={offers} />
        </Route>
        <Route exact path={AppRoute.SIGN_IN}>
          <Login />
        </Route>
        <Route exact path={AppRoute.FAVORITES}>
          <PageFavorites offers={offers} />
        </Route>
        <Route exact path={AppRoute.ROOM}>
          <Offer offers={offers} reviews={reviews} />
        </Route>
        <Route>
          <PageNotFound />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  offers: PropTypes.arrayOf(offerProp).isRequired,
  reviews: PropTypes.arrayOf(reviewProp).isRequired,

};

export default App;

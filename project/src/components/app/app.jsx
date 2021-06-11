import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

import MainPage from '../pages/main-page/main-page';
import PageFavorites from '../pages/page-favorites/page-favorites';
import PageRoom from '../pages/page-room/page-room';
import PageLogin from '../pages/page-login/page-login';
import PageNotFound from '../pages/page-not-found/page-not-found';

import offersProp from '../props/offers.prop';
import reviewsProp from '../props/reviews.prop';

import {AppRoute} from '../../const';

function App(props) {
  const {offers, reviews} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <MainPage offers={offers} />
        </Route>
        <Route exact path={AppRoute.SIGN_IN}>
          <PageLogin />
        </Route>
        <Route exact path={AppRoute.FAVORITES}>
          <PageFavorites offers={offers} />
        </Route>
        <Route exact path={AppRoute.ROOM}>
          <PageRoom offers={offers} reviews={reviews} />
        </Route>
        <Route>
          <PageNotFound />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  offers: PropTypes.arrayOf(offersProp).isRequired,
  reviews: PropTypes.arrayOf(reviewsProp).isRequired,

};

export default App;

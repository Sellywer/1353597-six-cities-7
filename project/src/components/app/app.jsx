import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

import MainPage from '../main-page/main-page';
import PageFavorites from '../page-favorites/page-favorites';
import PageOfferProperty from '../page-offer-property/page-offer-property';
import PageLogin from '../page-login/page-login';
import PageNotFound from '../page-not-found/page-not-found';

import {AppRoute} from '../../const';

function App(props) {
  const {cardsCount} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <MainPage
            cardsCount={cardsCount}
          />
        </Route>
        <Route exact path={AppRoute.SIGN_IN}>
          <PageLogin />
        </Route>
        <Route exact path={AppRoute.FAVORITES}>
          <PageFavorites />
        </Route>
        <Route exact path={AppRoute.ROOM}>
          <PageOfferProperty />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  cardsCount: PropTypes.number.isRequired,
};

export default App;

import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import Main from '../pages/main/main';
import PageFavorites from '../pages/favorites/favorites';
import Offer from '../pages/offer/offer';
import Login from '../pages/login/login';
import PageNotFound from '../pages/page-not-found/page-not-found';
import LoadingScreen from '../loading-screen/loading-screen';
import { PrivateRoute } from '../../components/private-route/private-route';
import browserHistory from '../../browser-history';

import {AppRoute, AuthorizationStatus} from '../../const';

function App(props) {
  const {authorizationStatus, isDataLoaded} = props;

  if (authorizationStatus === AuthorizationStatus.UNKNOWN || !isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.MAIN} component={Main}/>
        <Route exact path={AppRoute.SIGN_IN} component={Login}/>
        <PrivateRoute exact path={AppRoute.FAVORITES}
          authorizationStatus={authorizationStatus}
          render={() => <PageFavorites />}
        />
        <Route exact path={AppRoute.ROOM} component={Offer} />
        <Route>
          <PageNotFound />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = ({USER, DATA}) => ({
  authorizationStatus: USER.authorizationStatus,
  isDataLoaded: DATA.isDataLoaded,
});

export default connect(mapStateToProps)(App);

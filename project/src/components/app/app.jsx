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

import offerProp from '../props/offer.prop';
import reviewProp from '../props/review.prop';

import {AppRoute, AuthorizationStatus} from '../../const';

function App(props) {
  const {offers, reviews, authorizationStatus, isDataLoaded} = props;

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
        <PrivateRoute
          exact
          path={AppRoute.FAVORITES}
          authorizationStatus={authorizationStatus}
          render={() => <PageFavorites offers={offers} />}
        />
        <Route exact path={AppRoute.ROOM}
          render={({match}) => (
            <Offer
              id={match.params.id}
              reviews={reviews}
            />
          )}
        />
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
  authorizationStatus: PropTypes.string.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  reviews: state.reviews,
  authorizationStatus: state.authorizationStatus,
  isDataLoaded: state.isDataLoaded,
});

export default connect(mapStateToProps)(App);

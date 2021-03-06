import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {useSelector} from 'react-redux';

import {getAuthorizationStatus} from '../../store/user/selectors';
import {getLoadedDataStatus} from '../../store/data/selectors';

import Main from '../pages/main/main';
import Favorites from '../pages/favorites/favorites';
import Offer from '../pages/offer/offer';
import Login from '../pages/login/login';
import PageNotFound from '../pages/page-not-found/page-not-found';
import LoadingScreen from '../loading-screen/loading-screen';
import PrivateRoute from '../../components/private-route/private-route';

import {AppRoute, AuthorizationStatus} from '../../const';

function App() {

  const authorizationStatus = useSelector(getAuthorizationStatus);
  const isDataLoaded= useSelector(getLoadedDataStatus);

  if (authorizationStatus === AuthorizationStatus.UNKNOWN || !isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <Switch>
      <Route exact path={AppRoute.MAIN} component={Main}/>
      <Route exact path={AppRoute.SIGN_IN} component={Login}/>
      <PrivateRoute exact path={AppRoute.FAVORITES}
        authorizationStatus={authorizationStatus}
        render={() => <Favorites />}
      />
      <Route exact path={AppRoute.ROOM} component={Offer} />
      <Route>
        <PageNotFound />
      </Route>
    </Switch>
  );
}

export default App;

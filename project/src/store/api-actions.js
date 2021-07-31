import {loadFavorites, updateFavorites, updateReviews, loadOffers, loadOffer, loadReviews, loadOffersNearby, requireAuthorization, redirectToRoute, makeLogout, setUser } from './action';
import {AuthorizationStatus, APIRoute, AppRoute, ToastConfig} from '../const';
import {adaptOfferToClient, adaptCommentToClient} from '../adapter/adapter';
import {NameSpace} from './root-reducer';
import {showToast} from '../show-toast';

export const fetchFavoriteList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FAVORITE)
    .then(({data}) => {
      dispatch(loadFavorites(data.map((offer) => adaptOfferToClient(offer)),
      ));
    })
);

export const sendFavoritePlace = (id, status) => (dispatch, getState, api) => {
  const authStatus = getState()[NameSpace.USER].authorizationStatus;
  if (authStatus !== AuthorizationStatus.AUTH) {
    dispatch(redirectToRoute(AppRoute.SIGN_IN));
  }
  api.post(`${APIRoute.FAVORITE}/${id}/${status}`)
    .then(({data}) => {
      dispatch(updateFavorites(adaptOfferToClient(data)));
      dispatch(loadOffer(adaptOfferToClient(data)));
    })
    .catch(() => showToast('Предложение в избранное не добавлено. Пройдите авторизацию или проверьте соединение, перезагрузите страницу'));
};

export const fetchOffers = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) => dispatch(loadOffers(data.map(adaptOfferToClient))))
    .catch(() => showToast('Ошибка подключения. Проверьте соединение или перезагрузите страницу', ToastConfig.WITHOUT_TIMEOUT))
);

export const fetchOffer = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.OFFERS}/${id}`)
    .then(({data}) => {
      dispatch(loadOffer(adaptOfferToClient(data)));
    })
    .catch(() => {
      dispatch(redirectToRoute(AppRoute.NOT_FOUND));
    })
);

export const fetchReviewList = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.REVIEWS}/${id}`)
    .then(({ data }) => {
      dispatch(loadReviews(
        data.map((review) => adaptCommentToClient(review)),
      ));
    })
    .catch(() => dispatch(loadReviews([])))
);

export const fetchOffersNearby = (roomId) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.OFFERS}/${roomId}/nearby`)
    .then(({data}) => {
      const offers = data.map((offer) => adaptOfferToClient(offer));
      return offers;
    })
    .then((offers) => dispatch(loadOffersNearby(offers)))
    .catch(() => dispatch(loadOffersNearby([])))
);

export const postComment = (id, {comment, rating}, errorMessage) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.REVIEWS}/${id}`, {comment, rating})
    .then(({data}) => {
      dispatch(updateReviews(data.map((review) => adaptCommentToClient(review))));
      dispatch(loadReviews(data.map((review) => adaptCommentToClient(review))));
    })
    .catch(errorMessage)
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => {
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(setUser(data));
    })
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => {
      localStorage.setItem('token', data.token);
      dispatch(setUser(data));
    })
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(AppRoute.MAIN)))
    .then(() => {
      dispatch(fetchOffers());
    })
    .catch(() => showToast('Ошибка при авторизации. Проверьте соединение или перезагрузите страницу'))
);

export const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(makeLogout()))
    .then(() => dispatch(redirectToRoute(AppRoute.MAIN)))
    .catch(() => showToast('Ошибка при выходе из аккаунта. Проверьте соединение или перезагрузите страницу'))
);


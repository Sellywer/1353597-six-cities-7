import {loadOffers, loadOffer, loadReviews, loadOffersNearby, requireAuthorization, redirectToRoute, makeLogout, setUser, updateReviews } from './action';
import {AuthorizationStatus, APIRoute, AppRoute} from '../const';
import {adaptOfferToClient, adaptCommentToClient} from '../adapter/adapter';

export const fetchOffers = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) => dispatch(loadOffers(data.map(adaptOfferToClient))))
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

export const postComment = (id, {comment, rating}) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.REVIEWS}/${id}`, {comment, rating})
    .then(({data}) => {
      dispatch(updateReviews(data.map((review) => adaptCommentToClient(review))));
    })
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => {
      dispatch(setUser(data));
      localStorage.setItem('token', data.token);
    })
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(AppRoute.MAIN)))
);

export const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(makeLogout()))
    .then(() => dispatch(redirectToRoute(AppRoute.MAIN)))
);


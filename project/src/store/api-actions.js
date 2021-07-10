import {ActionCreator} from './action';
import {AuthorizationStatus, APIRoute, AppRoute} from '../const';
import {adaptOfferToClient, adaptCommentToClient} from '../adapter/adapter';

export const fetchOffers = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) => {
      const offers = data.map((offer) => adaptOfferToClient(offer));
      return offers;
    })
    .then((offers) => dispatch(ActionCreator.loadOffers(offers)))
);

export const fetchOffer = (id) => (dispatch, _getState, api) => (
  api.get(`{APIRoute.OFFERS}${id}`)
    .then(({data}) => {
      const offer = adaptOfferToClient(data);
      return offer;
    })
    .then((offer) => dispatch(ActionCreator.loadOffer(offer)))
);

export const fetchReviewList = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.REVIEWS}/${id}`)
    .then(({ data }) => {
      dispatch(ActionCreator.loadReviews(
        data.map((review) => adaptCommentToClient(review)),
      ));
    })
);

export const fetchOffersNearby = (roomid) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.OFFERS}/${roomid}/nearby`)
    .then(({data}) => {
      const offers = data.map((offer) => adaptOfferToClient(offer));
      return offers;
    })
    .then((offers) => dispatch(ActionCreator.loadOffersNearby(offers)))
    .catch(() => dispatch(ActionCreator.loadOffersNearby([])))
);

export const postComment = (id, {comment, rating}) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.REVIEWS}/${id}`, {comment, rating})
    .then(({data}) => {
      dispatch(ActionCreator.updateReviews(data.map((review) => adaptCommentToClient(review))));
    })
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => {
      dispatch(ActionCreator.setUser(data));
      localStorage.setItem('token', data.token);
    })
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute(AppRoute.MAIN)))
);

export const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(ActionCreator.logout()))
    .then(() => dispatch(ActionCreator.redirectToRoute(AppRoute.MAIN)))
);


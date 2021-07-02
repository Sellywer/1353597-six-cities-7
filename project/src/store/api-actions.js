import {ActionCreator} from './action';
import {AuthorizationStatus, APIRoute, AppRoute} from '../const';
import {adaptOfferToClient} from '../adapter/adapter';

export const fetchOffers = () => (dispatch, _getState, api) =>
  api.get(APIRoute.OFFERS).then(({ data }) => {
    dispatch(
      ActionCreator.loadOffers(
        data.map((item) => ({
          ...item,
          isFavorite: item.is_favorite,
          isPremium: item.is_premium,
          maxAdults: item.max_adults,
          previewImage: item.preview_image,
          host: {
            ...item.host,
            isPro: item.host.is_pro,
            avatarUrl: item.host.avatar_url,
          },
        })),
      ),
    );
  });

export const fetchOffer = (id) => (dispatch, _getState, api) => (
  api.get(`{APIRoute.OFFERS}${id}`)
    .then(({data}) => {
      const offer = adaptOfferToClient(data);
      return offer;
    })
    .then((offer) => dispatch(ActionCreator.loadOffer(offer)))
);

export const fetchReviewList = (id) => (dispatch, _getState, api) =>
  api.get(`${APIRoute.REVIEWS}/${id}`).then(({ data }) => {
    dispatch(
      ActionCreator.loadReviews(
        data.map((item) => ({
          ...item,
          user: {
            ...item.user,
            avatarUrl: item.user.avatar_url,
            isPro: item.user.is_pro,
          },
        })),
      ),
    );
  });

export const fetchOffersNearby = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.OFFERS}/${id}${APIRoute.OFFERS_NEARBY}`)
    .then(({data}) => {
      const offers = data.map((offer) => adaptOfferToClient(offer));
      return offers;
    })
    .then((offers) => dispatch(ActionCreator.loadOffersNearby(offers)))
    .catch(() => dispatch(ActionCreator.loadOffersNearby([])))
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

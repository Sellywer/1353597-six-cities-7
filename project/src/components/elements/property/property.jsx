import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {useParams} from 'react-router-dom';

import Map from '../../map/map';
import {AuthorizationStatus} from '../../../const';

import PageNotFound from '../../pages/page-not-found/page-not-found';
import NearPlaces from '../../elements/near-places/near-places';
import ReviewsList from '../review-list/reviews-list';
import ReviewForm from '../reviews-form/review-form';

import offerProp from '../../props/offer.prop';
import reviewsProp from '../../props/review.prop';

import {calcRatingInPercent} from '../../../utils';

const MAX_ROOM_IMAGES = 6;

function Property(props) {

  const {offers = [], reviews = [], offersNearby=[], authorizationStatus } = props;

  const GetId = () => {
    const { id } = useParams();
    return Number(id);
  };

  const roomId = GetId();

  const offer = offers.find((item) => item.id === roomId);

  if (offer === undefined) {
    return (
      <PageNotFound />
    );
  }

  return (
    <>
      <section className="property">
        <div className="property__gallery-container container">
          <div className="property__gallery">
            {offer.images.slice(0, MAX_ROOM_IMAGES).map((item) => (
              <div key={item} className="property__image-wrapper">
                <img className="property__image" src={item} alt="Pic apartment"/>
              </div>
            ))}
          </div>
        </div>
        <div className="property__container container">
          <div className="property__wrapper">
            {offer.isPremium ?
              <div className="property__mark">
                <span>Premium</span>
              </div> : ''}
            <div className="property__name-wrapper">
              <h1 className="property__name">
                {offer.title}
              </h1>
              <button className="property__bookmark-button button" type="button">
                <svg className="property__bookmark-icon"
                  width="31" height="33"
                  style = {{
                    fill: `${offer.isFavorite && '#4481c3'}`,
                    stroke: `${offer.isFavorite ? '#4481c3' : '#979797'}`,
                  }}
                >
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="property__rating rating">
              <div className="property__stars rating__stars">
                <span style={{width: calcRatingInPercent(offer.rating)}}></span>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="property__rating-value rating__value">{offer.rating}</span>
            </div>
            <ul className="property__features">
              <li className="property__feature property__feature--entire">
                {offer.type}
              </li>
              <li className="property__feature property__feature--bedrooms">
                {offer.bedrooms} Bedrooms
              </li>
              <li className="property__feature property__feature--adults">
                Max {offer.maxAdults} adults
              </li>
            </ul>
            <div className="property__price">
              <b className="property__price-value">&euro;{offer.price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            <div className="property__inside">
              <h2 className="property__inside-title">What&apos;s inside</h2>
              <ul className="property__inside-list">
                {offer.goods.map((item) => (
                  <li key={item} className="property__inside-item">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="property__host">
              <h2 className="property__host-title">Meet the host</h2>
              <div className="property__host-user user">
                <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                  <img className="property__avatar user__avatar" src={offer.host.avatarUrl} width="74" height="74" alt="Host avatar" />
                </div>
                <span className="property__user-name">
                  {offer.host.name}
                </span>
                {offer.host.isPro ?
                  <span className="property__user-status">
                    Pro
                  </span> : ''}
              </div>
              <div className="property__description">
                <p className="property__text">
                  {offer.description}
                </p>
              </div>
            </div>
            <section className="property__reviews reviews">
              <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
              <ReviewsList reviews={reviews} />
              {authorizationStatus === AuthorizationStatus.AUTH ? (
                <ReviewForm id={roomId}/> ) : ('')}
            </section>
          </div>
        </div>
        <section className="property__map map">
          <Map city={offers[0].city} offers={[offer, ...offersNearby]} activeCard={offer}/>
        </section>
      </section>
      <div className="container">
        <section className="near-places places">
        </section>
        <NearPlaces offers={offersNearby}/>
      </div>
    </>
  );
}

Property.propTypes = {
  offers: PropTypes.arrayOf(offerProp).isRequired,
  reviews: PropTypes.arrayOf(reviewsProp).isRequired,
  offersNearby: PropTypes.arrayOf(offerProp).isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = ({ offers, reviews, authorizationStatus, offersNearby, isOfferLoaded }) => ({
  offers,
  reviews,
  authorizationStatus,
  offersNearby,
  isOfferLoaded,
});

export default connect(mapStateToProps)(Property);

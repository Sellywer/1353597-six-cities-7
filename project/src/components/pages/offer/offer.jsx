import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';

import Map from '../../map/map';
import Header from '../../elements/header/header';
import CardList from '../card-list/card-list';
import { fetchReviewList, fetchOffers } from '../../../store/api-actions';

import ReviewForm from '../../elements/reviews/review-form';

import offerProp from '../../props/offer.prop';

import {calcRatingInPercent} from '../../../utils';
import {QUANTITY_OF_OFFERS_NEARBY, CardType} from '../../../const';

function Offer(props) {

  const {offers, loadReviewList } = props;

  const location = useLocation();

  const roomId = +location.pathname.replace(/\D+/g, '');

  const offer = offers.find((item) => item.id === roomId);
  const nearOffers = offers.filter((item) => item !== offer).slice(0, QUANTITY_OF_OFFERS_NEARBY);

  useEffect(() => {
    loadReviewList(roomId);
  }, [roomId, loadReviewList]);

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {offer.images.map((item) => (
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
                    style = {{
                      width: '31',
                      height: '33',
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
                    <img className="property__avatar user__avatar" src={offer.host.avatarUrl} style = {{width: '74', height: '74'}} alt="Host avatar" />
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
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">10</span></h2>
                <ReviewForm />
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map city={offers[0].city} offers={nearOffers}/>
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <CardList
              offers={nearOffers}
              CardType={CardType.ROOM_PAGE}
            />
          </section>
        </div>
      </main>
    </div>
  );
}

Offer.propTypes = {
  offers: PropTypes.arrayOf(offerProp).isRequired,
  loadReviewList: PropTypes.func.isRequired,
};

const mapStateToProps = ({ offers, review }) => ({
  offers,
  review,
});

const mapDispatchToProps = {
  loadReviewList: fetchReviewList,
  loadOfferList: fetchOffers,
};

export default connect(mapStateToProps, mapDispatchToProps)(Offer);

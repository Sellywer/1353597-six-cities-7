import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router';

import Map from '../../map/map';
import Logo from '../../elements/logo/logo';
import CardList from '../card-list/card-list';

import ReviewsList from '../../elements/reviews/reviews-list';
import ReviewForm from '../../elements/reviews/review-form';

import offerProp from '../../props/offer.prop';
import reviewsProp from '../../props/review.prop';

import {calcRatingInPercent} from '../../../utils';

function Offer(props) {
  const {offers, reviews} = props;
  const location = useLocation();

  const offer = offers.find((item) => item.id === location.state);
  const nearOffers = offers.filter((item) => item !== offer).slice(0, 3);

  const [activeCard, setActiveCard] = useState(offer);

  const onCardHover = (cardId) => {
    const currentCard = offers.find((item) => item.id === Number(cardId));
    setActiveCard(currentCard);
  };

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#nav">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#/">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

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
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                <ReviewsList reviews={reviews} />

                <ReviewForm />
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map city={offers[0].city} offers={nearOffers} activeCard={activeCard}/>
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <CardList
              offers={nearOffers}
              onMouseEnter={onCardHover}
              onMouseLeave={() => setActiveCard(offer)}
            />
          </section>
        </div>
      </main>
    </div>
  );
}

Offer.propTypes = {
  offers: PropTypes.arrayOf(offerProp).isRequired,
  reviews: PropTypes.arrayOf(reviewsProp).isRequired,

};

export default Offer;

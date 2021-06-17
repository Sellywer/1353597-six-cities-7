import React, {useState} from 'react';
import {Link, generatePath} from 'react-router-dom';

import offerProp from '../../props/offer.prop';

import {AppRoute} from '../../../const';

import {calcRatingInPercent} from '../../../utils';

const SteelBlue = '#4481c3';
const Nobel = '#979797';


function PlaceCard({offer}, setActiveCard = () => {}) {
  const {
    id,
    price,
    rating,
    isPremium,
    type,
    previewImage,
    isFavorite,
  } = offer;

  const [activeOffer, setActivateOffer] = useState({});

  return (
    <article className="cities__place-card place-card"
      onMouseEnter={() => {
        setActivateOffer({
          ...activeOffer,
          ...offer,
        });
      }}
      onMouseLeave={() => {
        setActivateOffer({});
      }}
    >
      {isPremium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div> : ''}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={{ pathname: generatePath(AppRoute.ROOM, { id }), state: id }}>
          <img className="place-card__image" src={previewImage} style={{width: '260', height: '200'}} alt="Place" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon"
              style={{
                width: '18', height: '19',
                fill: `${isFavorite && SteelBlue}`,
                stroke: `${isFavorite ? SteelBlue : Nobel}`,
              }}
            >
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: calcRatingInPercent(rating)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={{ pathname: generatePath(AppRoute.ROOM, { id }), state: id }}>
            {offer.title}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

PlaceCard.propTypes = {
  offer: offerProp,
};

export default PlaceCard;

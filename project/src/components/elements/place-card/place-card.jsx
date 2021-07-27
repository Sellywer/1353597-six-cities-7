import React from 'react';
import {Link, generatePath} from 'react-router-dom';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';

import offerProp from '../../props/offer.prop';

import {AppRoute, CardType} from '../../../const';
import {setActiveOffer} from '../../../store/action';
import { sendFavoritePlace } from '../../../store/api-actions';
import {calcRatingInPercent} from '../../../utils';

function PlaceCard({offer, cardType = CardType.MAIN_TYPE}) {
  const {
    id,
    price,
    rating,
    isPremium,
    type,
    previewImage,
    isFavorite,
  } = offer;

  const dispatch = useDispatch();

  const handleMouseEnter = () => {
    dispatch(setActiveOffer(+id));
  };

  const handleMouseLeave = () => {
    dispatch(setActiveOffer(null));
  };

  const {articleClassName, imgWrapperClassName, cardInfoClassName, imgWidth, imgHeight} = cardType;

  return (
    <article className={`${articleClassName} place-card`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isPremium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div> : ''}
      <div className={`${imgWrapperClassName} place-card__image-wrapper`}>
        <Link to={{ pathname: generatePath(AppRoute.ROOM, { id })}}>
          <img
            className="place-card__image"
            src={previewImage}
            style={{width: {imgWidth}, height: {imgHeight}}} alt="Place"
          />
        </Link>
      </div>
      <div className={`${cardInfoClassName} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button button ${isFavorite ? ' place-card__bookmark-button--active' : ''}`}
            type="button"
            onClick={() => {
              const newFavoriteState = isFavorite ? '0' : '1';
              dispatch(sendFavoritePlace(id, newFavoriteState));
            }}
          >
            <svg className="place-card__bookmark-icon"
              width="18" height="19"
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
  cardType: PropTypes.shape({
    articleClassName: PropTypes.string,
    imgWrapperClassName: PropTypes.string,
    cardInfoClassName: PropTypes.string,
    hasPremiumMark: PropTypes.bool,
    imgWidth: PropTypes.string,
    imgHeight: PropTypes.string,
  }).isRequired,
};

export default PlaceCard;

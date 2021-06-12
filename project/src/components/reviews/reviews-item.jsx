import React from 'react';
import rewiewsProp from '../props/reviews.prop';

import {calcRatingInPercent} from '../../utils';

function ReviewsItem(props) {

  const {review} = props;

  const reviewDate = new Date(review.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
  });

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={review.user.avatarUrl} style = {{width: '54', height:'54'}} alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {review.user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: calcRatingInPercent(review.rating)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {review.comment}
        </p>
        <time className="reviews__time" dateTime={review.data}>{reviewDate}</time>
      </div>
    </li>
  );
}

ReviewsItem.propTypes = {
  review: rewiewsProp,
};

export default ReviewsItem;

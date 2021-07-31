import React from 'react';
import reviewProp from '../../props/review.prop';

import {getRatingInPercent} from '../../../utils';

const getReviewDate = (date) => new Date(date).toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
});

function ReviewItem(props) {

  const {review} = props;

  const {
    comment,
    user,
    rating,
    date,
  } = review;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} style = {{width: '54', height:'54'}} alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: getRatingInPercent(rating)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={date}>{getReviewDate(date)}</time>
      </div>
    </li>
  );
}

ReviewItem.propTypes = {
  review: reviewProp,
};

export default ReviewItem;

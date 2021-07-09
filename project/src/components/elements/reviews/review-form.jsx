import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {postComment} from '../../../store/api-actions';

export function ReviewForm(props) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const {onSubmit, id} = props;

  // eslint-disable-next-line no-console
  console.log(props);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onSubmit(
      id,
      {comment, rating},
    );

    setRating(0);
    setComment('');
  };

  const ratingChange = (evt) => {
    setRating(Number(evt.target.value));
  };

  const commentChange = (evt) => {
    setComment(evt.target.value);
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio"
          checked={rating === 5}
          onChange={ratingChange}
        />
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" style = {{width: '37', height: '33'}}>
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
        <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio"
          checked={rating === 4}
          onChange={ratingChange}

        />
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" style = {{width: '37', height: '33'}}>
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
        <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio"
          checked={rating === 3}
          onChange={ratingChange}

        />
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" style = {{width: '37', height: '33'}}>
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
        <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio"
          checked={rating === 2}
          onChange={ratingChange}
        />
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" style = {{width: '37', height: '33'}}>
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
        <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio"
          checked={rating === 1}
          onChange={ratingChange}
        />
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"
        value={comment}
        onChange={commentChange}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set {' '}
          <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={comment.length < 50 || comment.length > 300 || rating === 0}>
          Submit
        </button>
      </div>
    </form>
  );
}

ReviewForm.propTypes = {
  id: PropTypes.number,
  onSubmit: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit(id, commentData) {
    dispatch(postComment(id, commentData));
  },
});

export default connect(null, mapDispatchToProps)(ReviewForm);

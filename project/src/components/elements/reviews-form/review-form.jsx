import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {postComment} from '../../../store/api-actions';
import ReviewText from '../review-text/review-text';
import RatingList from '../rating-list/rating-list';

const MIN_CHARS_COUNT = 50;
const MAX_CHARS_COUNT = 300;

export function ReviewForm(props) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const isButtonDisabled = rating === null || comment.length < MIN_CHARS_COUNT
  || comment.length > MAX_CHARS_COUNT;

  const {onSubmit, id} = props;

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onSubmit(
      id,
      {comment, rating},
    );

    setRating(0);
    setComment('');
  };


  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <RatingList rating={rating} setRating={setRating} />
      <ReviewText comment={comment} setComment={setComment} />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set {' '}
          <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isButtonDisabled ? 'disabled' : ''}
        >
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
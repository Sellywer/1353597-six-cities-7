import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';

import {getCommentSendingStatus} from '../../../store/data/selectors';
import {postComment} from '../../../store/api-actions';
import ReviewText from '../review-text/review-text';
import RatingList from '../rating-list/rating-list';
import {showToast} from '../../../show-toast';
import {CommentLength} from '../../../const';

export function ReviewForm({id}) {
  const dispatch = useDispatch();
  const isCommentSent = useSelector(getCommentSendingStatus);

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [isSending, setSendingStatus] = useState(false);

  const isButtonDisabled = rating === 0 || comment.length < CommentLength.MIN
  || comment.length > CommentLength.MAX;

  const getErrorMessage = () => {
    showToast('Комментарий не отправлен, проверьте доступ к интернету');
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setSendingStatus(true);

    dispatch(postComment(
      id,
      {comment, rating},
      getErrorMessage,
    ));

    setRating(0);
    setComment('');
  };

  useEffect(() => {
    if (isCommentSent) {
      setComment('');
      setRating(0);
    }
  }, [isCommentSent]);

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <RatingList rating={rating} setRating={setRating} disabled={isSending}/>
      <ReviewText comment={comment} setComment={setComment} disabled={isSending}/>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set {' '}
          <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">{CommentLength.MIN} characters</b>.
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
};

export default ReviewForm;

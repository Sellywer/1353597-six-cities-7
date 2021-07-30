import React from 'react';
import PropTypes from 'prop-types';

import {CommentLength} from '../../../const';

export function ReviewText({comment, setComment}) {

  const commentChange = (evt) => {
    setComment(evt.target.value);
  };

  return (
    <textarea
      className="reviews__textarea form__textarea"
      id="review"
      name="review"
      placeholder="Tell how was your stay, what you like and what can be improved"
      value={comment}
      onChange={commentChange}
      minLength={CommentLength.MIN}
      maxLength={CommentLength.MAX}
    />
  );
}

ReviewText.propTypes = {
  comment: PropTypes.string,
  setComment: PropTypes.func.isRequired,
};

export default ReviewText;

import React from 'react';
import PropTypes from 'prop-types';
import RewiewProp from '../../props/review.prop';
import ReviewItem from '../review-item/review-item';
import { MAX_REVIEWS } from '../../../const';

function ReviewsList(props) {

  const {reviews} = props;

  return (
    <ul className="reviews__list">
      {reviews
        .slice()
        .sort((review1, review2) => new Date(review2.date) - new Date(review1.date))
        .slice(0, MAX_REVIEWS)
        .map((review) => (<ReviewItem key={review.id} review={review}/>))}
    </ul>
  );
}

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(RewiewProp).isRequired,
};

export default ReviewsList;

import React from 'react';
import PropTypes from 'prop-types';
import RewiewProp from '../../props/review.prop';
import ReviewItem from './review-item';

function ReviewsList(props) {

  const {reviews} = props;

  return (
    <ul className="reviews__list">
      {reviews.map((item) => (<ReviewItem key={item.id} review={item}/>))}
    </ul>
  );
}

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(RewiewProp).isRequired,
};

export default ReviewsList;

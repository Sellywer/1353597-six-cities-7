import React from 'react';
import PropTypes from 'prop-types';
import RewiewProp from '../props/reviews.prop';
import ReviewsItem from './reviews-item';


function ReviewsList(props) {

  const {reviews} = props;

  return (
    <ul className="reviews__list">
      {reviews.map((item) => (
        <ReviewsItem key={item.id} review={item} />
      ))}
    </ul>
  );
}

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(RewiewProp).isRequired,
};

export default ReviewsList;

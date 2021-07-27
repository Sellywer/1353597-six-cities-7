import React from 'react';
import PropTypes from 'prop-types';

function SortItem({sortType, isActive, onChangeSort}) {

  const handleSortClick = () => {
    onChangeSort(sortType);
  };

  return (
    <li className={`places__option ${isActive && 'places__option--active'}`}
      tabIndex='0'
      onClick={handleSortClick}
    >
      {sortType}
    </li>
  );
}

SortItem.propTypes = {
  sortType: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onChangeSort: PropTypes.func.isRequired,
};

export default SortItem;

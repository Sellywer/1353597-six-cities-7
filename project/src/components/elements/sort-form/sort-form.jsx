import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { SortType } from '../../../const';

const sorts = Object.values(SortType);

function SortingForm({ initialSorting = SortType.POPULAR, onSortingChange = () => {} }) {
  const [ isActive, setIsActive ] = useState(false);
  const [ activeSort, setType ] = useState(SortType.POPULAR);
  return (
    <div className="places__sorting">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" onClick={() => setIsActive(true)}>
        {activeSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      {isActive && (
        <ul className="places__options places__options--custom places__options--opened">
          {sorts.map((item) => (
            <li
              key={item}
              className={`places__option ${activeSort === item ? 'places__option--active' : ''}`}
              tabIndex="0"
              onClick={() => {
                setType(item);
                setIsActive(false);
                onSortingChange(item);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

SortingForm.propTypes = {
  initialSorting: PropTypes.string,
  onSortingChange: PropTypes.func,
};

export default SortingForm;

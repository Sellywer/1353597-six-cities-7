import React from 'react';
import PropTypes from 'prop-types';
import {useSelector, useDispatch } from 'react-redux';

import {getCity} from '../../../store/ui/selectors';
import {changeCity} from '../../../store/action';
import {fetchOffers} from '../../../store/api-actions';

function CitiesList({locations}) {

  const city = useSelector(getCity);
  const dispatch = useDispatch();

  return (
    <ul className="locations__list tabs__list">
      {locations.map((item) => (
        <li key={item} className="locations__item">
          <a
            onClick={() => {
              dispatch(changeCity(item));
              dispatch(fetchOffers);
            }}
            className={
              city === item
                ? 'locations__item-link tabs__item tabs__item--active'
                : 'locations__item-link tabs__item'
            }
            href="#/"
          >
            <span>{item}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

CitiesList.propTypes = {
  locations: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default CitiesList;

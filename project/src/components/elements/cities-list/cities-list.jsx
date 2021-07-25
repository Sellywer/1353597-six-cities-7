import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { changeCity } from '../../../store/action';
import { fetchOffers } from '../../../store/api-actions';

function CitiesList({ locations, city, onCityChange, loadOfferList }) {
  return (
    <ul className="locations__list tabs__list">
      {locations.map((item) => (
        <li key={item} className="locations__item">
          <a
            onClick={() => {
              onCityChange(item);
              loadOfferList();
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
  city: PropTypes.string.isRequired,
  onCityChange: PropTypes.func.isRequired,
  loadOfferList: PropTypes.func.isRequired,
};

const mapStateToProps = ({UI}) => ({
  city: UI.city,
});

const mapDispatchToProps = {
  onCityChange: changeCity,
  loadOfferList: fetchOffers,
};

export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { ActionCreator } from '../../../store/action';
import { fetchOffers } from '../../../store/api-actions';

function CitiesList({ locations, city, changeCity, loadOfferList }) {
  return (
    <ul className="locations__list tabs__list">
      {locations.map((item) => (
        <li key={item} className="locations__item">
          <a
            onClick={() => {
              changeCity(item);
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
  changeCity: PropTypes.func.isRequired,
  loadOfferList: PropTypes.func.isRequired,
};

const mapStateToProps = ({ city }) => ({
  city,
});

const mapDispatchToProps = {
  changeCity: ActionCreator.changeCity,
  loadOfferList: fetchOffers,
};

export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);

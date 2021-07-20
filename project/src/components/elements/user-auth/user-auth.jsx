import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

import {AppRoute} from '../../../const';
import {logout} from '../../../store/api-actions';
import { ActionCreator } from '../../../store/action';

function HeaderNavAuthorized({email, signOut, setUser }) {

  const handleClick = (evt) => {
    evt.preventDefault();
    signOut();
    setUser({});
  };

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link
            className="header__nav-link header__nav-link--profile"
            to={AppRoute.FAVORITES}
          >
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            <span className="header__user-name user__name">{email}</span>
          </Link>
        </li>
        <li className="header__nav-item">
          <Link className="header__nav-link" to={AppRoute.MAIN}>
            <span className="header__signout" onClick={handleClick}>
              Sign out
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

HeaderNavAuthorized.propTypes = {
  email: PropTypes.string,
  signOut: PropTypes.func.isRequired,
  setUser: PropTypes.func.isRequired,
};

const mapStateToProps = ({ user: { email } }) => ({
  email,
});

const mapDispatchToProps = {
  signOut: logout,
  setUser: ActionCreator.setUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderNavAuthorized);

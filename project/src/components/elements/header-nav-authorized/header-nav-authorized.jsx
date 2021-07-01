import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {AppRoute} from '../../../const';
import {logout} from '../../../store/api-actions';


function HeaderNavAuthorized({ email, signOut}) {
  const handleClick = async () => {
    await signOut();
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
          <Link
            className="header__nav-link"
            onClick={(evt) => {
              evt.preventDefault();
              signOut();
            }}
            to={AppRoute.MAIN}
          >
            <span className="header__signout" onClick={handleClick}>Sign out</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}


HeaderNavAuthorized.propTypes = {
  email: PropTypes.string,
  signOut: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  signOut: logout,
};

export {HeaderNavAuthorized};
export default connect(null, mapDispatchToProps)(HeaderNavAuthorized);

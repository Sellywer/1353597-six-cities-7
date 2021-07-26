import React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import {getUserEmail} from '../../../store/user/selectors';

import {AppRoute} from '../../../const';
import {logout} from '../../../store/api-actions';

function UserAuth() {

  const dispatch = useDispatch();
  const email = useSelector(getUserEmail);

  const handleLogoutClick = (evt) => {
    evt.preventDefault();
    dispatch(logout());
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
            <span className="header__signout" onClick={handleLogoutClick }>
              Sign out
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default UserAuth;

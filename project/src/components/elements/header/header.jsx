
import React from 'react';
import {useSelector} from 'react-redux';

import {getAuthorizationStatus} from '../../../store/user/selectors';

import UserNoAuth from '../user-no-auth/user-no-auth';
import UserAuth from '../user-auth/user-auth';
import {AuthorizationStatus} from '../../../const';
import Logo from '../logo/logo';


function Header() {
  const authorizationStatus = useSelector(getAuthorizationStatus);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          {authorizationStatus === AuthorizationStatus.AUTH ? (
            <UserAuth />
          ) : (
            <UserNoAuth />
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;

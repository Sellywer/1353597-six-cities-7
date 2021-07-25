
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {getAuthorizationStatus} from '../../../store/user/selectors';

import UserNoAuth from '../user-no-auth/user-no-auth';
import UserAuth from '../user-auth/user-auth';
import {AuthorizationStatus} from '../../../const';
import Logo from '../logo/logo';


function Header({ authorizationStatus }) {
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

Header.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

export default connect(mapStateToProps)(Header);

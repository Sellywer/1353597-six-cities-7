
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import UserNoAuth from '../user-no-auth/user-no-auth';
import UserAuth from '../user-auth/user-auth';
import {AuthorizationStatus} from '../../../const';
import Logo from '../logo/logo';
import {logout} from '../../../store/api-actions';


function Header({ authorizationStatus, email, signOut }) {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          {authorizationStatus === AuthorizationStatus.AUTH ? (
            <UserAuth email={email} signOut={signOut} />
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
  email: PropTypes.string,
  signOut: PropTypes.func.isRequired,
};

const mapStateToProps = ({ authorizationStatus, email }) => ({
  authorizationStatus,
  email,
});

const mapDispatchToProps = {
  signOut: logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

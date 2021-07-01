
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import UserNoAuth from '../user-no-auth/user-no-auth';
import UserAuth from '../user-auth/user-auth';
import {AuthorizationStatus} from '../../../const';
import Logo from '../logo/logo';
import {logout} from '../../../store/api-actions';


function Header({ authorizationStatus, userEmail, signOut }) {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          {authorizationStatus === AuthorizationStatus.AUTH ? (
            <UserAuth userEmail={userEmail} signOut={signOut} />
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
  userEmail: PropTypes.string,
  signOut: PropTypes.func.isRequired,
};

const mapStateToProps = ({ authorizationStatus, userEmail }) => ({
  authorizationStatus,
  userEmail,
});

const mapDispatchToProps = {
  signOut: logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

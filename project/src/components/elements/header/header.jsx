
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import HeaderNavGuest from '../header-nav-guest/header-nav-guest';
import HeaderNavAuthorized from '../header-nav-authorized/header-nav-authorized';
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
            <HeaderNavAuthorized />
          ) : (
            <HeaderNavGuest />
          )}
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = ({ authorizationStatus }) => ({
  authorizationStatus,
});

export default connect(mapStateToProps)(Header);

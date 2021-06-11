import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../logo/logo';

function PageNotFound() {

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#nav">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#/">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <div className="page_not_found container">
          <h1>Ooops... Page Not Found</h1>
          <img className="page_not_found_image" src="img/404.png" alt="404" style = {{width: '81', height: '41'}} />
          <Link to="/">Вернуться на главную</Link>
        </div>
      </main>
    </div>
  );
}

export default PageNotFound;

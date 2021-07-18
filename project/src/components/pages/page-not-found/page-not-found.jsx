import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../elements/header/header';

function PageNotFound() {

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <div className="page_not_found container">
          <h1>Ooops... Page Not Found</h1>
          <Link to="/">Вернуться на главную</Link>
          <img className="page_not_found_image" src="img/404.png" alt="404" width="1081" height="1041" />
        </div>
      </main>
    </div>
  );
}

export default PageNotFound;

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import offers from './components/mock/offers';
import review from './components/mock/reviews';

ReactDOM.render(
  <React.StrictMode>
    <App
      offers={offers}
      reviews={review}
    />
  </React.StrictMode>,
  document.getElementById('root'));

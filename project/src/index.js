import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import offers from './components/mock/offers';
import reviews from './components/mock/reviews';


const Setting = {
  CARDS_COUNT: 5,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      cardsCount={Setting.CARDS_COUNT}
      offers={offers}
      reviews={reviews}
    />
  </React.StrictMode>,
  document.getElementById('root'));

import React, {useRef } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';

import { CITIES, AuthorizationStatus } from '../../../const';
import {getAuthorizationStatus} from '../../../store/user/selectors';

import {redirectToRoute, changeCity} from '../../../store/action';
import {login} from '../../../store/api-actions';
import Header from '../../elements/header/header';
import Main from '../main/main';

function Login() {

  const dispatch = useDispatch();
  const loginRef = useRef();
  const passwordRef = useRef();
  const onCityChange = useSelector(changeCity);
  const authorizationStatus = useSelector(getAuthorizationStatus);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    dispatch(login({
      login: loginRef.current.value,
      password: passwordRef.current.value,
    }));
    dispatch(redirectToRoute);
  };

  const setEmailValidation = () => {
    const emailInput = loginRef.current;
    let validationMessage = '';

    if (loginRef.current.validity.patternMismatch) {
      validationMessage = 'Заполните адрес электронной почты в соответствии с указанным примером. Пример корректного адреса: info@wikipedia.org';
    } else if (loginRef.current.validity.valueMissing) {
      validationMessage = 'Заполните это поле';
    } else {
      validationMessage = '';
    }

    emailInput.setCustomValidity(validationMessage);
  };


  const setPasswordValidation = () => {
    const passwordInput = passwordRef.current;
    let validationMessage = '';

    if (passwordInput.value && !passwordInput.value.split('').find((symbol) => symbol !== ' ')) {
      validationMessage = 'Пароль не должен состоять только из пробелов';
    }

    passwordInput.setCustomValidity(validationMessage);
    passwordInput.reportValidity();
  };

  if (authorizationStatus === AuthorizationStatus.AUTH) {
    return (
      <Main />
    );
  }

  return (
    <div className="page page--gray page--login">
      <Header />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form"
              action="#"
              method="post"
              onSubmit={handleSubmit}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required=""
                  ref={loginRef}
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  ref={passwordRef}
                  onInput={setPasswordValidation}
                />
              </div>
              <button
                className="login__submit form__submit button"
                type="submit"
                onClick={setEmailValidation}
              >
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to="/">
                <span onClick={() => onCityChange(CITIES.PARIS)}>
                  Amsterdam
                </span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Login;

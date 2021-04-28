import React, { useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { useAuth } from '../../providers/Auth';
import './Login.styles.css';
import loginApi from './login.api';

const WrongCredentials = styled.span`
  color: red;
  margin-top: 20px;
  font-size: 15px;
`;

function LoginPage() {
  const { login } = useAuth();
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [badCredentials, setBadCredentials] = useState();

  function authenticate(event) {
    event.preventDefault();
    loginApi(username, password)
      .then((result) => {
        login();
        localStorage.setItem('mockedUser', JSON.stringify(result));
        history.push('/');
      })
      .catch((err) => {
        setBadCredentials(
          <div>
            <p>{err.message}</p>
          </div>
        );
      });
  }

  const usernameInput = (e) => {
    const inputText = e.target.value;
    setUsername(inputText);
  };

  const passwordInput = (e) => {
    const inputText = e.target.value;
    setPassword(inputText);
  };

  return (
    <section className="login">
      <h1>Welcome back!</h1>
      <form onSubmit={authenticate} className="login-form">
        <div className="form-group">
          <label htmlFor="username">
            <strong>username</strong>
            <input required type="text" id="username" onChange={usernameInput} />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="password">
            <strong>password</strong>
            <input required type="password" id="password" onChange={passwordInput} />
          </label>
        </div>
        <button type="submit">login</button>
      </form>
      <WrongCredentials>{badCredentials}</WrongCredentials>
    </section>
  );
}

export default LoginPage;

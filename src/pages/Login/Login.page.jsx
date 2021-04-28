import React, { useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { useAuth } from '../../providers/Auth';
import './Login.styles.css';
import loginApi from './login.api';
import Login, {
  LoginForm,
  FormGroup,
  FormGroupStrong,
  Title,
} from './LoginStyledComponents/Login';

const WrongCredentials = styled.span`
  color: white;
  font-size: 1.2rem;
  text-align: center;
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
    <>
      <Login>
        <Title>Welcome back!</Title>
        <LoginForm onSubmit={authenticate}>
          <FormGroup>
            <label htmlFor="username">
              <FormGroupStrong>Username</FormGroupStrong>
              <input
                className="input_login"
                required
                type="text"
                id="username"
                onChange={usernameInput}
              />
            </label>
          </FormGroup>
          <FormGroup>
            <label htmlFor="password">
              <FormGroupStrong>Password</FormGroupStrong>
              <input
                className="input_login"
                required
                type="password"
                id="password"
                onChange={passwordInput}
              />
            </label>
          </FormGroup>
          <button type="submit">Login</button>
        </LoginForm>
        <WrongCredentials>{badCredentials}</WrongCredentials>
      </Login>
    </>
  );
}

export default LoginPage;

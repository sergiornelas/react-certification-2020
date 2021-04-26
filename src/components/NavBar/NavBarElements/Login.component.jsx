import React from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../../providers/Auth/Auth.provider';

export const LoginHandler = styled.p`
  margin-right: 1rem;
  cursor: pointer;
  display: none;
  @media (min-width: 750px) {
    display: block;
  }
`;

function Login() {
  const { authenticated, logout } = useAuth();
  const history = useHistory();

  function deAuthenticate(event) {
    event.preventDefault();
    logout();
    history.push('/');
  }

  return (
    <>
      {authenticated ? (
        <Link
          to="/"
          onClick={deAuthenticate}
          style={{ textDecoration: 'none', color: 'white' }}
        >
          <LoginHandler>Logout</LoginHandler>
        </Link>
      ) : (
        <Link to="/login" style={{ textDecoration: 'none', color: 'white' }}>
          <LoginHandler>Login</LoginHandler>
        </Link>
      )}
    </>
  );
}

export default Login;

import React from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../../providers/Auth/Auth.provider';

const LoginContainer = styled.span`
  display: flex;
  cursor: pointer;
  &:hover {
    text-decoration: underline 3px;
  }
`;

export const LoginHandler = styled.p`
  margin-top: 1.5rem;
  display: none;
  @media (min-width: 750px) {
    display: block;
  }
`;

const ProfileLoggedOut = styled.div`
  background: lightgrey;
  width: 3.5px;
  height: 3.5px;
  border-radius: 50%;
  margin: 0.8rem 0.5rem;
  padding: 1.3rem;
  display: none;
  @media (min-width: 750px) {
    display: block;
  }
`;

const ProfileLoggedIn = styled(ProfileLoggedOut)`
  background-image: url(${JSON.parse(localStorage.getItem('mockedUser')).avatarUrl});
  background-size: cover;
`;

function Login() {
  const { authenticated, logout } = useAuth();
  const history = useHistory();

  function deAuthenticate(event) {
    event.preventDefault();
    logout();
    localStorage.removeItem('mockedUser');
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
          <LoginContainer>
            <LoginHandler>Logout</LoginHandler>
            <ProfileLoggedIn />
          </LoginContainer>
        </Link>
      ) : (
        <Link to="/login" style={{ textDecoration: 'none', color: 'white' }}>
          <LoginContainer>
            <LoginHandler>Login</LoginHandler>
            <ProfileLoggedOut />
          </LoginContainer>
        </Link>
      )}
    </>
  );
}

export default Login;

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../providers/Auth/Auth.provider';

export const FavoritesHandler = styled.p`
  margin-right: 1rem;
  cursor: pointer;
  display: none;
  @media (min-width: 750px) {
    display: block;
  }
`;

function Login() {
  const { authenticated } = useAuth();

  return (
    <>
      {authenticated ? (
        <Link to="/favorites" style={{ textDecoration: 'none', color: 'white' }}>
          <FavoritesHandler>Favorites</FavoritesHandler>
        </Link>
      ) : (
        <></>
      )}
    </>
  );
}

export default Login;

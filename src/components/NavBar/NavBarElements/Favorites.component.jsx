import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../providers/Auth/Auth.provider';

export const FavoritesHandler = styled.button`
  background-color: white;
  font-size: inherit;
  border-radius: 7px;
  cursor: pointer;
  padding: 10px;
  margin-left: 10px;
  &:hover {
    background-color: lightgray;
  }
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
        <Link
          to="/favorites"
          style={{ textDecoration: 'none', color: 'white', margin: '13px 18px 0 0' }}
        >
          <FavoritesHandler>Favorites</FavoritesHandler>
        </Link>
      ) : (
        <></>
      )}
    </>
  );
}

export default Login;

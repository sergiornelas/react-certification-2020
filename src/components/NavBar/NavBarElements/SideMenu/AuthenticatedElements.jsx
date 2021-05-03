import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../../../providers/Auth/Auth.provider';
import { Menu, MenuDark, ListElements, ListElement, Line } from './MenuElements';
import { useAppState } from '../../../../providers/AppState/State.provider';

export const AuthenticatedElements = ({ toggleSideBar }) => {
  const { logout } = useAuth();
  const history = useHistory();

  function deAuthenticate(event) {
    event.preventDefault();
    logout();
    localStorage.removeItem('mockedUser');
    history.push('/');
    toggleSideBar();
  }

  const { state, dispatch } = useAppState();
  const { darkTheme } = state;

  const switchTheme = () => {
    dispatch({ type: 'SET_THEME', payload: !darkTheme });
    localStorage.setItem('darkTheme', !darkTheme);
  };

  const Theme = ({ children }) => {
    return <> {darkTheme ? <MenuDark>{children}</MenuDark> : <Menu>{children}</Menu>}</>;
  };

  return (
    <Theme>
      <ListElements>
        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
          <ListElement onClick={toggleSideBar}>Home</ListElement>
        </Link>
        <Line />
        <Link
          to="/favorites"
          style={{ textDecoration: 'none', color: 'white' }}
          onClick={toggleSideBar}
        >
          <ListElement>Favorites</ListElement>
        </Link>
        <Line />
        {darkTheme ? (
          <ListElement onClick={switchTheme} style={{ cursor: 'pointer' }}>
            Light Mode
          </ListElement>
        ) : (
          <ListElement onClick={switchTheme} style={{ cursor: 'pointer' }}>
            Dark Mode
          </ListElement>
        )}
        <Line />
        <ListElement onClick={deAuthenticate}>Logout</ListElement>
      </ListElements>
    </Theme>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, MenuDark, ListElements, ListElement, Line } from './MenuElements';
import { useAppState } from '../../../../providers/AppState/State.provider';

export const NonAuthenticatedElements = ({ toggleSideBar }) => {
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
        <Link to="/login" style={{ textDecoration: 'none', color: 'white' }}>
          <ListElement onClick={toggleSideBar}>Login</ListElement>
        </Link>
      </ListElements>
    </Theme>
  );
};

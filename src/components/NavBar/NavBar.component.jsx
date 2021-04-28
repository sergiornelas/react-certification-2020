import React from 'react';
import styled from 'styled-components';

import Search from './NavBarElements/Search.component';
import ToggleDark from './NavBarElements/ToggleDark.component';
import Login from './NavBarElements/Login.component';
import { useAppState } from '../../providers/AppState/State.provider';
import Favorites from './NavBarElements/Favorites.component';
import Home from './NavBarElements/Home.component';

const NavLight = styled.nav`
  color: white;
  background-color: brown;

  height: 4rem;
  box-shadow: 1px 1px 3px 0.5px darkgray;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavDark = styled(NavLight)`
  background-color: black;
`;

export const LeftWrapper = styled.nav`
  display: inline-flex;
`;

export const RightWrapper = styled(LeftWrapper)``;

function Toolbar() {
  const { state } = useAppState();
  const { darkTheme } = state;

  const NavBar = ({ children }) => {
    if (darkTheme) {
      return <NavDark role="rowheader">{children}</NavDark>;
    }
    return <NavLight role="rowheader">{children}</NavLight>;
  };

  return (
    <NavBar>
      <LeftWrapper>
        <Home />
        <Search />
      </LeftWrapper>
      <RightWrapper>
        <Favorites />
        <ToggleDark />
        <Login />
      </RightWrapper>
    </NavBar>
  );
}

export default Toolbar;

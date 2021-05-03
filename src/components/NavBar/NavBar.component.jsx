import React, { useState } from 'react';
import styled from 'styled-components';
import Search from './NavBarElements/Search.component';
import { ToggleDark } from './NavBarElements/ToggleDark.component';
import Login from './NavBarElements/Login.component';
import { useAppState } from '../../providers/AppState/State.provider';
import Favorites from './NavBarElements/Favorites.component';
import SideDrawer from './NavBarElements/SideMenu/SideDrawer.component';
import SideMenu from './NavBarElements/SideMenu/SideMenu';

export const NavLight = styled.nav`
  color: white;
  background-color: brown;
  width: auto;
  height: 4rem;
  box-shadow: 1px 1px 3px 0.5px darkgray;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavDark = styled(NavLight)`
  background-color: black;
`;

export const LeftWrapper = styled.nav`
  display: inline-flex;
`;

export const RightWrapper = styled(LeftWrapper)``;

export function Toolbar() {
  const { state } = useAppState();
  const { darkTheme } = state;
  const [sideElement, setSideElement] = useState(false);

  const NavBar = ({ children }) => {
    if (darkTheme) {
      return <NavDark role="rowheader">{children}</NavDark>;
    }
    return <NavLight role="rowheader">{children}</NavLight>;
  };

  const toggleSideBar = () => {
    setSideElement(!sideElement);
  };

  return (
    <NavBar>
      <SideMenu sideElement={sideElement} toggleSideBar={toggleSideBar} />
      <LeftWrapper>
        <SideDrawer toggleSideBar={toggleSideBar} />
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

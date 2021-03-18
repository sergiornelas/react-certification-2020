import React from 'react';
import styled from 'styled-components';

import SideDrawer from './NavBarElements/SideDrawer';
import Search from './NavBarElements/Search';
import ToggleDark from './NavBarElements/ToggleDark';
import Login from './NavBarElements/Login';

const Nav = styled.nav`
  color: white;
  height: 4rem;
  background-color: brown;
  /* font-size: 2rem; */
  margin: auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 1px 1px 1px 1px darkgray;
`;

const LeftWrapper = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const RightWrapper = styled(LeftWrapper)``;

function Toolbar() {
  return (
    <Nav>
      <LeftWrapper>
        <SideDrawer />
        <Search />
      </LeftWrapper>
      <RightWrapper>
        Dark mode
        <ToggleDark />
        Login
        <Login />
      </RightWrapper>
    </Nav>
  );
}

export default Toolbar;

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
  box-shadow: 1px 1px 3px 0.5px darkgray;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LeftWrapper = styled.nav`
  display: inline-flex;
`;

export const RightWrapper = styled(LeftWrapper)``;

function Toolbar() {
  return (
    <Nav role="rowheader">
      <LeftWrapper>
        <SideDrawer />
        <Search />
      </LeftWrapper>
      <RightWrapper>
        <ToggleDark />
        <Login />
      </RightWrapper>
    </Nav>
  );
}

export default Toolbar;

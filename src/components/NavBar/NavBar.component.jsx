import React from 'react';
import styled from 'styled-components';

import SideDrawer from './NavBarElements/SideDrawer.component';
import Search from './NavBarElements/Search.component';
import ToggleDark from './NavBarElements/ToggleDark.component';
import Login from './NavBarElements/Login.component';

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

function Toolbar({ onSearch }) {
  return (
    <Nav role="rowheader">
      <LeftWrapper>
        <SideDrawer />
        <Search onSearch={onSearch} />
      </LeftWrapper>
      <RightWrapper>
        <ToggleDark />
        <Login />
      </RightWrapper>
    </Nav>
  );
}

export default Toolbar;

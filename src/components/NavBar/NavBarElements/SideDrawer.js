import React from 'react';
import styled from 'styled-components';
// import NavigationItem from './NavigationItem/NavigationItem';

const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  margin: 0 2rem;
`;

const Div = styled.div`
  width: 40px;
  height: 4px;
  background-color: white;
  margin: 3.5px 0;

  ${DivContainer}:hover & {
    background-color: black;
  }
`;

function SideDrawer() {
  return (
    <DivContainer>
      <Div />
      <Div />
      <Div />
    </DivContainer>
  );
}

export default SideDrawer;

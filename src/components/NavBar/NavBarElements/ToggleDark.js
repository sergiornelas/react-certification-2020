import React from 'react';
import styled from 'styled-components';

// Toggle switch
const Dark = styled.input`
  color: grey;
  /* height: 4rem; */
  margin: auto;

  width: 60px;
  height: 34px;
  cursor: pointer;

  background-color: blanchedalmond;
`;

function ToggleDark() {
  return <Dark type="radio" />;
}

export default ToggleDark;

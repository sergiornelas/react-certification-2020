import React from 'react';
import styled from 'styled-components';

// Toggle switch
const Dark = styled.input`
  color: grey;
  margin: auto;
  width: 60px;
  height: 34px;
  cursor: pointer;
  display: none;
  @media (min-width: 750px) {
    display: block;
  }
`;

const Text = styled.p`
  display: none;
  @media (min-width: 750px) {
    display: block;
  }
`;

function ToggleDark() {
  return (
    <>
      <Text>Dark Mode</Text>
      <Dark type="radio" id="dark" name="dark" value="dark" />
    </>
  );
}

export default ToggleDark;

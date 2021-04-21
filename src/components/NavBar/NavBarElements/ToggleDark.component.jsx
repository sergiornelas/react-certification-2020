import React from 'react';
import styled from 'styled-components';
// import { useAppState } from '../../../providers/AppState/State.provider';

export const Dark = styled.input`
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

function ToggleDark({ darkTheme, dispatch }) {
  const switchTheme = () => {
    dispatch({ type: 'SET_THEME', payload: !darkTheme });
  };

  return (
    <>
      <Text>Dark Mode</Text>
      <Dark type="radio" onClick={switchTheme} />
    </>
  );
}

export default ToggleDark;

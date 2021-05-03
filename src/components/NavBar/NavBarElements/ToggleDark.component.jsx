import React from 'react';
import styled from 'styled-components';
import { useAppState } from '../../../providers/AppState/State.provider';

export const Text = styled.p`
  display: none;
  cursor: pointer;
  margin-right: 1.5rem;
  background-color: white;
  border-radius: 50px;
  padding: 10px;
  color: black;
  @media (min-width: 750px) {
    display: block;
  }
  &:hover {
    background-color: lightgray;
  }
`;

export function ToggleDark() {
  const { state, dispatch } = useAppState();
  const { darkTheme } = state;

  const switchTheme = () => {
    dispatch({ type: 'SET_THEME', payload: !darkTheme });
    localStorage.setItem('darkTheme', !darkTheme);
  };

  return (
    <>
      {darkTheme ? (
        <Text onClick={switchTheme}>Light Mode</Text>
      ) : (
        <Text onClick={switchTheme}>Dark Mode</Text>
      )}
    </>
  );
}

export default ToggleDark;

import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { useAppState } from './providers/AppState/State.provider';

const BackgroundLight = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    background-color: wheat;
  }
`;

const BackgroundDark = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    background-color: rgb(61, 61, 61);
  }
`;

export const GlobalStyles = () => {
  const { state } = useAppState();
  const { darkTheme } = state;

  if (darkTheme) {
    return <BackgroundDark />;
  }
  return <BackgroundLight />;
};

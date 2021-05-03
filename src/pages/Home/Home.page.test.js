import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import '@testing-library/jest-dom/extend-expect';
import { HomeTitleLight, HomeTitleDark, HomeTitle } from './Home.page';

jest.mock('../../providers/AppState/State.provider', () => ({
  useAppState: jest.fn(() => {
    return {
      state: true,
      dispatch: jest.fn(),
    };
  }),
}));

test('renders the page title', () => {
  render(<HomeTitleLight />);
  expect(document.querySelector('h1')).toBeInTheDocument();
});

test('renders the page title', () => {
  render(<HomeTitleDark />);
  expect(document.querySelector('h1')).toBeInTheDocument();
});

test('renders the page title', () => {
  render(<HomeTitle />);
  expect(document.querySelector('h1')).toBeInTheDocument();
});

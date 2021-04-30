import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import 'jest-styled-components';
import '@testing-library/jest-dom/extend-expect';
import { ToggleDark } from './ToggleDark.component';

jest.mock('../../../providers/AppState/State.provider', () => ({
  useAppState: jest.fn(() => {
    return {
      state: true,
      dispatch: jest.fn(),
    };
  }),
}));

test('renders the page title', () => {
  render(<ToggleDark />);
  const button = document.querySelector('p');
  fireEvent.click(button);
  expect(button).toHaveTextContent('Dark Mode');
});

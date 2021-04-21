import React from 'react';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import '@testing-library/jest-dom/extend-expect';
import ToggleDark from './ToggleDark.component';

test('renders the correct text', () => {
  render(<ToggleDark />);

  expect(screen.getByText('Dark Mode')).toBeInTheDocument();
});

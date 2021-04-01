import React from 'react';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import '@testing-library/jest-dom/extend-expect';

import Search from './Search.component';

test('renders the correct text', () => {
  render(<Search />);

  expect(screen.getByRole('search')).toBeInTheDocument();
  // expect(screen.getByRole('search')).toHaveStyle({ color: 'black' });
});

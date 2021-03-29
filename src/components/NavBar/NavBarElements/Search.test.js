import * as React from 'react';
import { render, screen } from '@testing-library/react';

import Search from './Search';

test('renders the correct text', () => {
  render(<Search />);

  expect(screen.getByRole('search')).toBeInTheDocument();
  // expect(screen.getByRole('search')).toHaveStyle({ color: 'black' });
});

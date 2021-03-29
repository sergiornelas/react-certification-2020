import * as React from 'react';
import { render, screen } from '@testing-library/react';

import ToggleDark from './ToggleDark';

test('renders the correct text', () => {
  render(<ToggleDark />);

  expect(screen.getByText('Dark Mode')).toBeInTheDocument();
});

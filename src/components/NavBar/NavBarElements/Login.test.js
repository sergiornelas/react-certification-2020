import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Login from './Login';

test('renders login element', () => {
  render(<Login />);

  expect(screen.getByText('Login')).toBeInTheDocument();
  expect(screen.getByText('Login')).toHaveStyle({ cursor: 'pointer' });
});

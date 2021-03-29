import React from 'react';
import { render, screen } from '@testing-library/react';
import SideDrawer from './SideDrawer';

test('Sidedrawer available', () => {
  render(<SideDrawer />);

  expect(screen.getByRole('menuitem')).toBeInTheDocument();
});

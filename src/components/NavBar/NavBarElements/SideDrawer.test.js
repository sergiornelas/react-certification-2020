import React from 'react';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import '@testing-library/jest-dom/extend-expect';
import SideDrawer from './SideDrawer.component';

test('Sidedrawer available', () => {
  render(<SideDrawer />);

  expect(screen.getByRole('menuitem')).toBeInTheDocument();
});

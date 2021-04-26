import React from 'react';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import '@testing-library/jest-dom/extend-expect';
// import { BrowserRouter } from 'react-router-dom';
import Login from './Login.component';

test('renders login element', () => {
  render(
    // <BrowserRouter>
    <Login />
    // </BrowserRouter>
  );

  expect(screen.getByText('Login')).toBeInTheDocument();
  expect(screen.getByText('Login')).toHaveStyle({ cursor: 'pointer' });
});

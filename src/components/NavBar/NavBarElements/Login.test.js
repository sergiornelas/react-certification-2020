import React from 'react';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import Login from './Login.component';

jest.mock('../../../providers/Auth', () => ({
  useAuth: jest.fn(() => {
    return { login: jest.fn() };
  }),
}));

test('renders login element', () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );

  const text = screen.getAllByText('Login');
  expect(text[0]).toBeInTheDocument();
});

describe('Test login page renders properly', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
  });

  it('Should render the login page', () => {
    expect(wrapper).not.toBeNull();
  });
});

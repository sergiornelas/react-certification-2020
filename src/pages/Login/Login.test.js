import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import LoginPage from './Login.page';

jest.mock('../../providers/Auth', () => ({
  useAuth: jest.fn(() => {
    return { login: jest.fn() };
  }),
}));

jest.mock('../../providers/AppState/State.provider', () => ({
  useAppState: jest.fn(() => {
    return {
      state: true,
      dispatch: jest.fn(),
    };
  }),
}));

describe('Test login page renders properly', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(<LoginPage />);
  });

  it('Should render the login page', () => {
    expect(wrapper).not.toBeNull();
  });

  it('Should show a title', () => {
    const title = wrapper.getByText('Welcome back!');
    expect(title).not.toBeNull();
    expect(title.tagName).toBe('H1');
  });

  it('Should render a filed to input the username', () => {
    const input = wrapper.getByLabelText('Username', { selector: 'input' });
    expect(input).not.toBeNull();
  });

  it('Should render a filed to input the password', () => {
    const input = wrapper.getByLabelText('Password', { selector: 'input' });
    expect(input).not.toBeNull();
  });
});

describe('Test the input fields are accesible and updated', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(<LoginPage />);
  });

  it('Should allow input in the fields ', () => {
    const userInput = wrapper.getByLabelText('Username', { selector: 'input' });
    const passwordInput = wrapper.getByLabelText('Password', { selector: 'input' });
    fireEvent.keyDown(userInput, { key: 'A', code: 'KeyA' });
    fireEvent.keyDown(passwordInput, { key: 'B', code: 'KeyB' });
  });
});

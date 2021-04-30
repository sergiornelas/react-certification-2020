import React from 'react';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import { LeftWrapper, RightWrapper, NavLight, Toolbar } from './NavBar.component';

jest.mock('../../providers/AppState/State.provider', () => ({
  useAppState: jest.fn(() => {
    return {
      state: true,
      dispatch: jest.fn(),
    };
  }),
}));

describe('Full navbar and its childs are in the page', () => {
  test('leftwrapper is available', () => {
    render(<LeftWrapper />);
    const leftSide = screen.getByRole('navigation');
    expect(leftSide).toBeInTheDocument();
    expect(leftSide).toHaveStyle({ display: 'inline-flex' });
  });

  test('rightwrapper is available', () => {
    render(<RightWrapper />);
    const rightSide = screen.getByRole('navigation');
    expect(rightSide).toBeInTheDocument();
    expect(rightSide).toHaveStyle({ display: 'inline-flex' });
  });

  test('<NavLight>', () => {
    render(<NavLight />);
    const x = screen.getByRole('navigation');
    expect(x).toBeInTheDocument();
    expect(x).toHaveStyle({ color: 'white' });
  });

  test('Home Element', () => {
    render(
      <BrowserRouter>
        <Toolbar />
      </BrowserRouter>
    );
    const x = screen.getByText('Home');
    expect(x).toBeInTheDocument();
  });
});

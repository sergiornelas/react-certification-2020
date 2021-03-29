import * as React from 'react';
import { render, screen } from '@testing-library/react';

import NavBar, { LeftWrapper, RightWrapper } from './NavBar';

describe('Full navbar and its childs are in the page', () => {
  test('navbar is available', () => {
    render(<NavBar />);
    const navbar = screen.getByRole('rowheader');
    expect(navbar).toBeInTheDocument();
    expect(navbar).toHaveStyle({ backgroundColor: 'brown' });
  });

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
});

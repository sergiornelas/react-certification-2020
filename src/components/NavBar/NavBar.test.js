import React from 'react';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import '@testing-library/jest-dom/extend-expect';

import { LeftWrapper, RightWrapper } from './NavBar.component';

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
});

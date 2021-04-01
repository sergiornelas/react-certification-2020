import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import '@testing-library/jest-dom/extend-expect';
import VideoCards from './VideoCards';

describe('Check videocard elements being on page', () => {
  test('Title and description of videocard', () => {
    render(<VideoCards />);
    expect(document.querySelector('h1')).toBeInTheDocument();
    expect(document.querySelector('img')).toBeInTheDocument();
  });
});

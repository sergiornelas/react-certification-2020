import * as React from 'react';
import { render } from '@testing-library/react';
import VideoCards from './VideoCards';

describe('Check videocard elements being on page', () => {
  test('Title and description of videocard', () => {
    render(<VideoCards />);
    expect(document.querySelector('h1')).toBeInTheDocument();
    expect(document.querySelector('img')).toBeInTheDocument();
  });
});

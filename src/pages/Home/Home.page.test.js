import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import '@testing-library/jest-dom/extend-expect';

import { HomeTitle } from './Home.page';

test('renders the page title', () => {
  render(<HomeTitle />);
  expect(document.querySelector('h1')).toBeInTheDocument();
});

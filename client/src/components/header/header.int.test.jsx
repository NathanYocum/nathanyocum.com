import 'jest';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';

import Header from './header';

it('renders a title passed as a prop', () => {
  const { queryByText } = render(<Header title="hello world!" />);
  expect(queryByText('hello world!')).toBeInTheDocument();
});

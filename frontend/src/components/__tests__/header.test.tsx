import {screen, render} from '@testing-library/react'
import React from 'react';

import {CustomHeader} from '../header';

describe('Unit tests for Custom Header', () => {
  describe('CustomHeader', () => {
    it('renders Hello World', async () => {
      render(<CustomHeader />);
      await screen.findByText("Hello World!")
    })
  })
})
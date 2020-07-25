import React from 'react'
import {render, screen} from '@testing-library/react'

import Index from '..';

describe('Unit tests for index page', () => {
  describe('Index', () => {
    it('renders text from header', async () => {
      render(<Index />);
      await screen.findByText("Hello World!")
    })
  })
})
import React from 'react'
import { render } from 'react-testing-library'

import Debug from '..'

describe('<Debug />', () => {
  it('should be defined', () => {
    expect(typeof Debug).toBe('function')
  })

  it('Renders stringified value object', () => {
    const { getByText } = render(<Debug values={{ property1: '1', property2: '2' }} />)

    getByText('Debug Info')
    getByText(/property1/)
    getByText(/property2/)
  })
})

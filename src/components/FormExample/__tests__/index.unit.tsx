import React from 'react'
import { render } from 'react-testing-library'

import FormExample from '..'

describe('<FormExample />', () => {
  it('should be defined', () => {
    expect(typeof FormExample).toBe('function')
  })

  it('should contain example 3 fields', () => {
    const { getByLabelText } = render(<FormExample />)

    getByLabelText('First Name')
    getByLabelText('Last Name')
    getByLabelText('Email')
  })
})

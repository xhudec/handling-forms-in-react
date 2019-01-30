import React from 'react'
import { render, fireEvent } from 'react-testing-library'

import Form from '..'

describe('<Form />', () => {
  it('should be defined', () => {
    expect(typeof Form).toBe('function')
  })

  it('should render form without crash', () => {
    render(
      <Form onSubmit={() => jest.fn()}>
        {({ handleSubmit, handleChange, handleBlur, values }) => (
          <form onSubmit={handleSubmit}>
            <label htmlFor="test">Test</label>
            <input
              id="test"
              name="test"
              type="text"
              value={values.test}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <button type="submit">Submit</button>
          </form>
        )}
      </Form>
    )
  })

  it('should render form with initial values', () => {
    const { getByLabelText } = render(
      <Form onSubmit={() => jest.fn()} initialValues={{ test: 'test value' }}>
        {({ handleSubmit, handleChange, handleBlur, values }) => (
          <form onSubmit={handleSubmit}>
            <label htmlFor="test">Test</label>
            <input
              id="test"
              name="test"
              type="text"
              value={values.test}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <button type="submit">Submit</button>
          </form>
        )}
      </Form>
    )

    const inputElement = getByLabelText('Test')
    expect(inputElement).toHaveAttribute('value', 'test value')
  })

  it('should handle form input change events', () => {
    const { getByLabelText } = render(
      <Form onSubmit={() => jest.fn()}>
        {({ handleSubmit, handleChange, handleBlur, values }) => (
          <form onSubmit={handleSubmit}>
            <label htmlFor="test">Test</label>
            <input
              id="test"
              name="test"
              type="text"
              value={values.test}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <button type="submit">Submit</button>
          </form>
        )}
      </Form>
    )

    const inputElement = getByLabelText('Test')

    fireEvent.change(inputElement, { target: { value: 'VALUE' } })
    expect(inputElement).toHaveAttribute('value', 'VALUE')
  })

  it('should trigger onSubmit callback on form submission', () => {
    const onSubmitSpy = jest.fn()

    const { getByText, getByLabelText } = render(
      <Form onSubmit={onSubmitSpy}>
        {({ handleSubmit, handleChange, handleBlur, values }) => (
          <form onSubmit={handleSubmit}>
            <label htmlFor="test">Test</label>
            <input
              id="test"
              name="test"
              type="text"
              value={values.test}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <button type="submit">Submit</button>
          </form>
        )}
      </Form>
    )

    const inputElement = getByLabelText('Test')
    const submitButton = getByText('Submit')

    fireEvent.change(inputElement, { target: { value: 'VALUE' } })
    expect(inputElement).toHaveAttribute('value', 'VALUE')

    fireEvent.click(submitButton)
    expect(onSubmitSpy).toHaveBeenCalledTimes(1)
    expect(onSubmitSpy).toHaveBeenLastCalledWith({ test: 'VALUE' })
  })
})

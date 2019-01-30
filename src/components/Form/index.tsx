import React from 'react'

interface IFormRenderProps {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => any
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => any
  handleBlur: (event: React.FocusEvent<HTMLInputElement>) => any
  values: { [key: string]: any }
  touched: { [key: string]: boolean }
  isSubmitting: boolean
}

interface IFormProps {
  onSubmit: Function
  children: (renderProps: IFormRenderProps) => React.ReactNode

  initialValues?: { [key: string]: any } | undefined
}

interface IFormState {
  values: { [key: string]: any }
  touched: { [key: string]: boolean }
  isSubmitting: boolean
}

class Form extends React.Component<IFormProps, IFormState> {
  constructor(props: IFormProps) {
    super(props)

    this.state = {
      values: props.initialValues ? { ...props.initialValues } : {},
      touched: {},
      isSubmitting: false,
    }
  }

  handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    this.setState(state => ({
      values: {
        ...state.values,
        [target.name]: target.type === 'checkbox' ? target.checked : target.value,
      },
    }))
  }

  handleBlur = ({ target }: React.FocusEvent<HTMLInputElement>) => {
    this.setState(state => ({
      touched: {
        ...state.touched,
        [target.name]: true,
      },
    }))
  }

  handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const { onSubmit } = this.props
    const { values } = this.state

    this.setSubmitting(true)

    try {
      await onSubmit(values)
    } catch (err) {
      console.error('[Form::handleSubmit] ERROR:', err)
    } finally {
      this.setSubmitting(false)
    }
  }

  setSubmitting = (isSubmitting: boolean) => {
    this.setState({ isSubmitting })
  }

  render() {
    const { children } = this.props
    const { values, touched, isSubmitting } = this.state

    return children({
      values,
      touched,
      isSubmitting,
      handleSubmit: this.handleSubmit,
      handleChange: this.handleChange,
      handleBlur: this.handleBlur,
    })
  }
}

export default Form

import React from 'react'

import Form from '../Form'
import Debug from '../Debug'

import * as S from './styled'

import delay from '../../utils/delay'

const INITIAL_VALUES = { firstName: '', lastName: '', email: '' }

const handleFormSubmit = async (values: object) => {
  // simulate API call
  await delay(2000)
  alert(`Submitted Values:\n${JSON.stringify(values, null, 2)}`)
}

const FormExample: React.FC = () => (
  <S.PageContainer>
    <h3>Form Example</h3>
    <Form initialValues={INITIAL_VALUES} onSubmit={handleFormSubmit}>
      {({ handleSubmit, handleChange, handleBlur, values, touched, isSubmitting }) => (
        <S.FlexBoxForm onSubmit={handleSubmit}>
          <S.InputLabel htmlFor="firstName">First Name</S.InputLabel>
          <S.Input
            id="firstName"
            name="firstName"
            type="text"
            placeholder="Your First Name..."
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <S.InputLabel htmlFor="lastName">Last Name</S.InputLabel>
          <S.Input
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Your Last Name..."
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <S.InputLabel htmlFor="email">Email</S.InputLabel>
          <S.Input
            id="email"
            name="email"
            type="email"
            placeholder="Your email address..."
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <S.SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </S.SubmitButton>
          <Debug values={{ values, touched, isSubmitting }} />
        </S.FlexBoxForm>
      )}
    </Form>
  </S.PageContainer>
)

export default FormExample

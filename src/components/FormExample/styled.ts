import styled from 'styled-components'

export const PageContainer = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const FlexBoxForm = styled.form`
  display: flex;
  flex-direction: column;
`

export const InputLabel = styled.label`
  font-size: 14px;
`

export const Input = styled.input`
  width: 250px;
  font-size: 13px;
  padding: 4px 8px;
  margin-bottom: 8px;
  outline: none;
  border: 1px solid gray;
  border-radius: 4px;
  transition: border 200ms ease-in-out;

  &:hover {
    border: 1px solid ${({ theme }) => theme.primary};
  }
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
  &:disabled {
    border: 1px solid gray;
  }
`

export const SubmitButton = styled.button`
  height: 40px;
  padding: 8px 16px
  color: white;
  background-color: ${({ theme }) => theme.primary};
  transition: color 200ms ease-in-out, background-color 200ms ease-in-out;
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 4px;
  outline: none;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.primary};
    background-color: white;
  }
`

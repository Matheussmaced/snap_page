import styled from 'styled-components'

export const LoginContainer = styled.div`
  color: ${(props) => props.theme.white};
  text-align: center;
`

export const InputEmailAndPassword = styled.input`
  padding: 0.2rem;
  margin: 0 0 1rem 0.5rem;

  border-radius: 5px;
  border: none;
`

export const LabelEmail = styled.label`
  margin-right: 0.4rem;
`

export const Submit = styled.input`
  padding: 0.5rem;

  border: none;
  border-radius: 10px;
  width: 50%;
  background-color: green;
  color: ${(props) => props.theme.white};
  font-size: 1rem;

  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.white};
    color: green;
  }
`

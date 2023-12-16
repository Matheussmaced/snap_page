import styled from 'styled-components'

export const BodyContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 80.75rem;

  margin: 0 auto;
  padding: 1rem;
  margin-top: 3rem;

  button {
    padding: 0.7rem 1rem;
    background-color: ${(props) => props.theme['dark-gray']};
    color: ${(props) => props.theme.white};

    border-radius: 0.7rem;
    margin-top: 3rem;
    cursor: pointer;

    transition: 0.5s;

    &:hover {
      color: ${(props) => props.theme['dark-gray']};
      background-color: ${(props) => props.theme.white};
    }
  }
`

export const LogosClientsContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 2rem;
  margin-top: 5rem;
`

export const InformsContainer = styled.div`
  h1 {
    font-size: 5rem;
  }

  p {
    max-width: 20rem;
    margin-top: 2rem;

    color: ${(props) => props.theme.lightGrey};
  }
`

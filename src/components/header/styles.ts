import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;

  padding: 1rem 3rem;

  margin: 0 auto;
  max-width: 93.75rem;
`

export const LogoAndInforms = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  gap: 3rem;
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.lightGrey};

    display: flex;
    align-items: center;

    gap: 0.2rem;
    transition: 0.3s;

    &:hover {
      color: ${(props) => props.theme['dark-gray']};
    }
  }
`

export const HeaderInforms = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`

export const ButtonsContainer = styled.div`
  gap: 1rem;
  display: flex;
  justify-content: flex-end;

  margin-left: 15rem;
`

export const Buttons = styled.button`
  padding: 0.5rem 1.5rem;
  border: solid 2px transparent;
  background-color: ${(props) => props.theme.white};

  border-radius: 0.5rem;

  cursor: pointer;
  transition: 0.3s;

  &:hover {
    border: solid 2px ${(props) => props.theme['dark-gray']};
  }
`

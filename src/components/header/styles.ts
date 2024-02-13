import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

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
  align-items: center;

  margin-left: 15rem;
  text-align: center;
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

export const DialogContainer = styled.div`
  position: fixed;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: ${(props) => props.theme['dark-gray']};
  color: ${(props) => props.theme.white};
  padding: 3rem;
  border-radius: 8px;
`

export const DialogHeader = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;

  gap: 1rem;
`

export const Title = styled(Dialog.Title)`
  margin-bottom: 2rem;

  text-align: center;
`

export const IconContainer = styled(Dialog.Close)`
  background-color: transparent;
  border: none;
  position: relative;
  top: -2rem;
  right: -2rem;

  cursor: pointer;
  margin-bottom: 2rem;
`

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.85);
`

export const NameUser = styled.span`
  text-align: center;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  margin: 0 1rem 0 0;
`

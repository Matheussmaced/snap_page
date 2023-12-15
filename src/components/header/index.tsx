import { CaretDown } from 'phosphor-react'
import logo from '../../assets/logo.svg'
import {
  Buttons,
  ButtonsContainer,
  HeaderContainer,
  HeaderInforms,
  LogoAndInforms,
  Nav,
} from './styles'

export const HeaderComponent = () => {
  return (
    <HeaderContainer>
      <LogoAndInforms>
        <img src={logo} alt="SNAP" />

        <HeaderInforms>
          <Nav>
            <a href="#">
              Features <CaretDown size={13} />
            </a>
            <a href="#">
              Company <CaretDown size={13} />
            </a>
            <a href="#">Careers</a>
            <a href="#">About</a>
          </Nav>

          <ButtonsContainer>
            <Buttons>Login</Buttons>
            <Buttons>Register</Buttons>
          </ButtonsContainer>
        </HeaderInforms>
      </LogoAndInforms>
    </HeaderContainer>
  )
}

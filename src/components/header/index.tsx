import { CaretDown, X } from 'phosphor-react'
import logo from '../../assets/logo.svg'
import {
  Buttons,
  ButtonsContainer,
  DialogContainer,
  DialogHeader,
  HeaderContainer,
  HeaderInforms,
  IconContainer,
  LogoAndInforms,
  Nav,
  Overlay,
  Title,
} from './styles'
import * as Dialog from '@radix-ui/react-dialog'
import { LoginComponent } from './components/Login'
import { RegisterComponent } from './components/Register'

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
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <Buttons>Login</Buttons>
              </Dialog.Trigger>

              <Dialog.Portal>
                <Overlay />
                <Dialog.Content>
                  <DialogContainer>
                    <DialogHeader>
                      <Title>Login do usuario</Title>
                      <IconContainer>
                        <X color="white" />
                      </IconContainer>
                    </DialogHeader>

                    <LoginComponent />
                  </DialogContainer>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>

            <Dialog.Root>
              <Dialog.Trigger asChild>
                <Buttons>Register</Buttons>
              </Dialog.Trigger>

              <Dialog.Portal>
                <Overlay />
                <Dialog.Content>
                  <DialogContainer>
                    <DialogHeader>
                      <Title>Cadastro</Title>
                      <IconContainer>
                        <X color="white" />
                      </IconContainer>
                    </DialogHeader>

                    <RegisterComponent />
                  </DialogContainer>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </ButtonsContainer>
        </HeaderInforms>
      </LogoAndInforms>
    </HeaderContainer>
  )
}

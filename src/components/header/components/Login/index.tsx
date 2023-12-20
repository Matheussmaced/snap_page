import {
  InputEmailAndPassword,
  LabelEmail,
  LoginContainer,
  Submit,
} from './styles'

export const LoginComponent = () => {
  return (
    <LoginContainer>
      <form>
        <div>
          <LabelEmail>Email</LabelEmail>
          <InputEmailAndPassword type="text" />
        </div>

        <div>
          <label>Senha</label>
          <InputEmailAndPassword type="password" />
        </div>

        <Submit type="submit" placeholder="Entrar" />
      </form>
    </LoginContainer>
  )
}

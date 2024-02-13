import { useForm } from 'react-hook-form'
import {
  InputEmailAndPassword,
  LabelEmail,
  LoginContainer,
  Submit,
} from './styles'

interface FormData {
  email: string
  password: string
}

export const LoginComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    console.log(data)
  }

  return (
    <LoginContainer>
      <form>
        <div>
          <LabelEmail>Email</LabelEmail>
          <InputEmailAndPassword
            type="text"
            {...register('email', { required: true })}
          />
        </div>

        <div>
          <label>Senha</label>
          <InputEmailAndPassword
            type="password"
            {...register('password', { required: true, minLength: 5 })}
          />
        </div>

        <Submit
          type="button"
          value="Entrar"
          onClick={() => {
            handleSubmit(onSubmit)()
          }}
        />
      </form>
    </LoginContainer>
  )
}

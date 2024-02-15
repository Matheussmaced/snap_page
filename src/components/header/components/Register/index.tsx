import { useForm } from 'react-hook-form'
import {
  InputEmailAndPassword,
  LabelEmail,
  LoginContainer,
  Submit,
} from './styles'
import { api } from '../../lib/axios'

interface FormData {
  email: string
  password: string
}

export const RegisterComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    const { email, password } = data

    await api.post('/users', {
      email,
      password,
    })
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
            {...register('password', {
              minLength: 5,
            })}
          />
        </div>

        <Submit
          type="button"
          value="Cadastrar"
          onClick={() => {
            handleSubmit(onSubmit)()
          }}
        />
      </form>
    </LoginContainer>
  )
}

// @flow
import React from 'react'
import { block } from 'bem-cn'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import type { FormProps } from 'redux-form'
import { combineValidators, isRequired } from 'revalidate'
import { Input } from 'components'
import { loginSucceed } from 'store/user/userActions'
import login from 'api/login'
import './style.scss'

type Props = {
  loginSucceed: Function,
} & FormProps

const s = block('signup')

const validate = combineValidators({
  email: isRequired({ message: 'Поле не может быть пустым' }),
  password: isRequired({ message: 'Введите пароль' }),
})

class Login extends React.PureComponent<Props, {}> {
  onSubmit = values => (
    login(values)
      .then(this.props.loginSucceed)
      .then(() => this.props.history.push('/account'))
      .catch(error => console.error(error.message))
  )

  render() {
    const { handleSubmit, error, pristine, submitting, invalid } = this.props
    const notValid = pristine || error || invalid || submitting
    return (
      <div className={s('container')}>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <div>
            <label htmlFor='email'>
              Email
            </label>
            <Field
              id='email'
              name='email'
              type='email'
              component={Input}
            />
          </div>
          <div>
            <label htmlFor='password'>
              Пароль
            </label>
            <Field
              id='password'
              name='password'
              type='password'
              component={Input}
            />
          </div>
          <button
            type='submit'
            disabled={notValid}
          >
            Войти
          </button>
        </form>
      </div>
    )
  }
}

const loginForm = reduxForm({
  form: 'login',
  validate,
})(Login)

export default connect(null, { loginSucceed })(loginForm)

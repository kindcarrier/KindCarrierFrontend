// @flow
import React from 'react'
import { block } from 'bem-cn'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import type { FormProps } from 'redux-form'
import { combineValidators } from 'revalidate'
import { Input } from 'components'
import {
  emailValidator,
  passwordValidator,
  passwordConfirmation,
} from 'utils/validators'
import { signupSucceed } from 'store/user/userActions'
import signup from 'api/signup'
import './style.scss'

type Props = {
  signupSucceed: Function,
} & FormProps

const s = block('signup')

const validate = combineValidators({
  email: emailValidator,
  password: passwordValidator,
  password_confirm: passwordConfirmation,
})

class Signup extends React.PureComponent<Props, {}> {
  onSubmit = values => (
    signup(values)
      .then(this.props.signupSucceed)
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
            <label htmlFor='first_name'>
              Имя
            </label>
            <Field
              id='first_name'
              name='first_name'
              type='text'
              component={Input}
            />
          </div>
          <div>
            <label htmlFor='last_name'>
              Фамилия
            </label>
            <Field
              id='last_name'
              name='last_name'
              type='text'
              component={Input}
            />
          </div>
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
          <div>
            <label htmlFor='password_confirm'>
              Пароль еще раз
            </label>
            <Field
              id='password_confirm'
              name='password_confirm'
              type='password'
              component={Input}
            />
          </div>
          <button
            type='submit'
            disabled={notValid}
          >
            Зарегистрироваться
          </button>
        </form>
      </div>
    )
  }
}

const signupForm = reduxForm({
  form: 'signup',
  validate,
})(Signup)

export default connect(null, { signupSucceed })(signupForm)

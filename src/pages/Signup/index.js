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
      <div className={s()}>
        <div className={s('container')}>
          <div className={s('header')}>
            Регистрация
          </div>
          <form onSubmit={handleSubmit(this.onSubmit)}>
            <div className={s('input')}>
              <label htmlFor='first_name' />
              <Field
                id='first_name'
                name='first_name'
                type='text'
                component={Input}
                placeholder='Имя'
              />
            </div>
            <div className={s('input')}>
              <label htmlFor='last_name' />
              <Field
                id='last_name'
                name='last_name'
                type='text'
                component={Input}
                placeholder='Фамилия'
              />
            </div>
            <div className={s('input')}>
              <label htmlFor='email' />
              <Field
                id='email'
                name='email'
                type='email'
                component={Input}
                placeholder='Email'
              />
            </div>
            <div className={s('input')}>
              <label htmlFor='password' />
              <Field
                id='password'
                name='password'
                type='password'
                component={Input}
                placeholder='********'
              />
            </div>
            <div className={s('input')}>
              <label htmlFor='password_confirm' />
              <Field
                id='password_confirm'
                name='password_confirm'
                type='password'
                component={Input}
                placeholder='********'
              />
            </div>
            <button
              type='submit'
              disabled={notValid}
              className={s('btn', { signup: true, disabled: submitting })}
            >
              Зарегистрироваться
            </button>
          </form>
        </div>
      </div>
    )
  }
}

const signupForm = reduxForm({
  form: 'signup',
  validate,
})(Signup)

export default connect(null, { signupSucceed })(signupForm)

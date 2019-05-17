import { createValidator, composeValidators, isRequired } from 'revalidate'
import isEmail from 'validator/lib/isEmail'
import isLength from 'validator/lib/isLength'

export const isValidEmail = createValidator(
  message => value => ((value && !isEmail(value)) ? message : null),
  'Почтовый адрес недействителен',
)

export const passwordsMatched = createValidator(
  message => (value, values) => {
    if (values && value !== values.password) {
      return message
    } return null
  },
  'Пароли не совпадают',
)

export const isValidLength = createValidator(
  message => (value) => {
    if (value && !isLength(value, { min: 8 })) {
      return message
    }
    return null
  },
  'Пароль должен быть минимум 8 символов',
)

export const emailValidator = composeValidators(
  isRequired({ message: 'Необходимо ввести почтовый адрес' }),
  isValidEmail,
)()

export const passwordValidator = composeValidators(
  isRequired({ message: 'Поле не может быть пустым' }),
  isValidLength,
)()

export const passwordConfirmation = composeValidators(
  isRequired({ message: 'Введите пароль еще раз.' }),
  passwordsMatched,
)()

// @flow
import * as React from 'react'
import type { FieldProps } from 'redux-form'
import { block } from 'bem-cn'
import './style.scss'

type Props = {
  type: string,
  placeholder: ?string,
  id?: string,
  theme: ?string,
  maxLength: ?string,
  disabled?: boolean,
  validationError: string,
} & FieldProps

const field = block('text-input')

const Input = (props: Props) => {
  const {
    input,
    id,
    type,
    placeholder,
    theme,
    meta: { touched, error },
    maxLength,
    disabled,
    validationError,
  } = props
  return (
    <div className={field()}>
      <input
        className={field('field', { theme })}
        {...input}
        placeholder={placeholder}
        id={id}
        type={type}
        maxLength={maxLength}
        disabled={disabled}
        data-testid='text-input'
        autoCapitalize='none'
      />
      <span className={field('error', { theme })} data-testid='error'>{validationError || (touched && error)}</span>
    </div>
  )
}

Input.defaultProps = {
  disabled: false,
  id: null,
}

export default Input

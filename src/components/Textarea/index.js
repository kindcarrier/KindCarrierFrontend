// @flow
import React from 'react'
import type { FieldProps } from 'redux-form'
import { block } from 'bem-cn'

type Props = {
  theme: string,
} & FieldProps

const ta = block('text-input')

const Textarea = ({ theme, input, meta: { touched, error } }: Props) => (
  <>
    <textarea className={ta('field', { theme })} {...input} rows='10' cols='40' />
    <span className={ta('error', { theme })} data-testid='error'>{touched && error}</span>
  </>
)

export default Textarea

// @flow
import * as React from 'react'
import { block } from 'bem-cn'
import './style.scss'

type Props = {
  onClick: () => void
}

const btn = block('close-button')

const CloseButton = ({ onClick }: Props) => (
  <button type='button' className={btn()} onClick={onClick} data-testid='close-button' />
)

export default CloseButton

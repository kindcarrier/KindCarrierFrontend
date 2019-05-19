// @ flow
import React from 'react'
import { block } from 'bem-cn'
import { CloseButton } from 'components'
import './style.scss'

type Props = {
  visible: boolean,
  onClick: Function,
}

const m = block('menu')

const Menu = ({ visible, onClick }: Props) => (
  <div className={m({ visible })}>
    <CloseButton onClick={onClick} />
  </div>
)

export default Menu

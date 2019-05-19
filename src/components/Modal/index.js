// @flow
import * as React from 'react'
import { block } from 'bem-cn'
import Portal from 'components/Portal'
import { CloseButton } from 'components'
import './style.scss'

type Props = {
  children: React.Node,
  onClick: Function,
}

const m = block('modal')

const Modal = ({ children, onClick }: Props) => (
  <Portal targetId='modals-portal'>
    <div className={m()}>
      <div className={m('card')}>
        <>
          <div className={m('button-wrapper')}>
            <CloseButton onClick={onClick} />
          </div>
          {children}
        </>
      </div>
      <div className={m('overlay')} />
    </div>
  </Portal>
)

export default Modal

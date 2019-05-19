// @flow
import React from 'react'
import { block } from 'bem-cn'
import { Modal, OfferCard } from 'components'
import './style.scss'

type Props = {
  onClick: Function,
  modalOpen: boolean,
}

const ns = block('nego-starter')

class NegoStarter extends React.PureComponent<Props, State> {
  render() {
    return (
      <>
        {this.props.modalOpen &&
          <Modal onClick={this.props.onClick}>
            <OfferCard onClose={this.props.onClick} />
          </Modal>
        }
        <div className={ns()}>
          <button
            type='button'
            className={ns('button', { offer: true })}
            onClick={this.props.onClick}
          >
            Предложить
          </button>
          <button
            type='button'
            className={ns('button', { ask: true })}
            onClick={this.toggleModal}
          >
            Найти
          </button>
        </div>
      </>
    )
  }
}

export default NegoStarter

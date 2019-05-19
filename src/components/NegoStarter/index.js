// @flow
import React from 'react'
import { block } from 'bem-cn'
import { Modal, OfferCard } from 'components'
import './style.scss'

type State = {
  modalOpen: boolean,
}

const ns = block('nego-starter')

class NegoStarter extends React.PureComponent<{}, State> {
  state = {
    modalOpen: false,
  }

  toggleModal = () => (
    this.setState(({ modalOpen }) => ({ modalOpen: !modalOpen }))
  )

  render() {
    return (
      <>
        {this.state.modalOpen &&
          <Modal onClick={this.toggleModal}>
            <OfferCard />
          </Modal>
        }
        <div className={ns()}>
          <button
            type='button'
            className={ns('button', { offer: true })}
            onClick={this.toggleModal}
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

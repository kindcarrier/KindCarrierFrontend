// @flow
import React from 'react'
import { block } from 'bem-cn'
import { Modal, OfferCard } from 'components'
import './style.scss'

type Props = {
  onClick: Function,
  modalOpen: boolean,
}

type State = {
  buttonType: string,
}

const ns = block('nego-starter')

class NegoStarter extends React.PureComponent<Props, State> {
  state = {
    buttonType: '',
  }

  handleClick = (type) => {
    this.setState({ buttonType: type })
    this.props.onClick()
  }

  render() {
    return (
      <>
        {this.props.modalOpen &&
          <Modal onClick={this.props.onClick}>
            <OfferCard onClose={this.props.onClick} type={this.state.buttonType} />
          </Modal>
        }
        <div className={ns()}>
          <button
            type='button'
            className={ns('button', { offer: true })}
            onClick={() => this.handleClick('offer')}
          >
            Предложить
          </button>
          <button
            type='button'
            className={ns('button', { ask: true })}
            onClick={() => this.handleClick('ask')}
          >
            Найти
          </button>
        </div>
      </>
    )
  }
}

export default NegoStarter

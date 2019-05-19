// @flow
import React from 'react'
import { block } from 'bem-cn'
import './style.scss'

type Props = { message: Message }

type State = { messageVisible: boolean }

const ml = block('message-list')

class MessageCard extends React.PureComponent<Props, State> {
  state = {
    messageVisible: false,
  }

  toggleMessageVisibility = () => (
    this.setState(({ messageVisible }) => ({ messageVisible: !messageVisible }))
  )

  render() {
    const { message } = this.props
    return (
      <>
        <div className={ml('msg-sender')} role='button' tabIndex='0' onClick={this.toggleMessageVisibility}>
          {message.sender}
        </div>
        {this.state.messageVisible &&
          <div className={ml('msg-content')}>
            {message.content}
            <div className={ml('btn-wrapper')}>
              <button type='button' className={ml('msg-button', { read: true })}>Прочитано</button>
              <button type='button' className={ml('msg-button', { reply: true })}>Ответить</button>
              <button type='button' className={ml('msg-button', { delete: true })}>Удалить</button>
            </div>
          </div>}
      </>
    )
  }
}

export default MessageCard

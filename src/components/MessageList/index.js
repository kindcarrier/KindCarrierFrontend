// @flow
import React from 'react'
import { block } from 'bem-cn'
import MessageCard from './MessageCard'
import './style.scss'

type Props = {
  messages: Message[],
}

const ml = block('message-list')

const MessageList = ({ messages }: Props) => (
  <div className={ml()}>
    {messages.map(msg => <MessageCard key={msg.id} message={msg} />)}
  </div>
)

export default MessageList

// @flow
import faker from 'faker'
import uuid from 'uuid'

export default function msgGenerator(): Message[] {
  const msgQtty = faker.random.number({ min: 1, max: 5 })
  const messages: Message[] = []
  for (let i = 1; i <= msgQtty; i += 1) {
    const message: Message = {}
    message.id = uuid()
    message.sender = `${faker.name.firstName()} ${faker.name.lastName()}`
    message.content = faker.lorem.paragraph()
    message.read = false
    messages.push(message)
  }
  return messages
}

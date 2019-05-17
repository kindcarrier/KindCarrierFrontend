// @flow
import { store } from 'store'

function defaultHeader() {
  const { user: { token } } = store.getState()
  return {
    'Content-Type': 'application/json',
    Authorization: token,
  }
}

export default defaultHeader

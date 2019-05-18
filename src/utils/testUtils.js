import React from 'react'
import rootReducer from 'store/rootReducer'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { render as Render } from 'react-testing-library'

export const render = (
  ui,
  { initialState, store = createStore(rootReducer, initialState), ...options } = {},
) => Render(<Provider store={store}>{ui}</Provider>, options)

export function actionCreator(type, payload = null) {
  return payload
    ? { type, payload }
    : { type }
}

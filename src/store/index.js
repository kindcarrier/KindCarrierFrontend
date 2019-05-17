// @flow
import * as React from 'react'
import configureStore from 'store/configureStore'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { Provider } from 'react-redux'

type Props = {
  children: React.Node
}

const { store, persistor } = configureStore()

const Store = ({ children }: Props) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      {children}
    </PersistGate>
  </Provider>
)
export default Store

export { store }

import { LOGIN_SUCCEEDED } from 'store/user/userActions'
import { reducer as userReducer } from 'store/user/reducer'

describe('user reducer', () => {
  const initialState = {}
  test('returns initial state', () => {
    const newState = userReducer(undefined, {})
    expect(newState).toEqual(initialState)
  })
  test('handles LOGIN_SUCCEEDED action', () => {
    const action = {
      type: LOGIN_SUCCEEDED,
      payload: { token: '123456' },
    }
    const newState = userReducer(initialState, action)
    expect(newState).toEqual({ token: '123456' })
  })
})

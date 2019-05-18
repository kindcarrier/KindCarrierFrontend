import { LOGIN_SUCCEEDED, loginSucceed } from 'store/user/userActions'
import { actionCreator } from 'utils/testUtils'

test('loginSucceed returns LOGIN_SUCCEEDED action and payload', () => {
  const payload = { token: '123456' }
  expect(loginSucceed(payload)).toEqual(actionCreator(LOGIN_SUCCEEDED, payload))
})

// @flow
import { LOGIN_SUCCEEDED, SIGNUP_SUCCEEDED, LOGOUT, USER_UPDATED } from './userActions'

type UserData = {
  data: User | null,
}

type userAction = {
  type: string,
  payload: User | null,
}

const initialState: UserData = {}

export function reducer(state: UserData = initialState, action: userAction) {
  switch (action.type) {
    case LOGIN_SUCCEEDED:
    case SIGNUP_SUCCEEDED:
    case USER_UPDATED:
      return action.payload
    case LOGOUT:
      return initialState
    default:
      return state
  }
}

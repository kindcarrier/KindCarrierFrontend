// @flow
import { LOGIN_SUCCEEDED, SIGNUP_SUCCEEDED, LOGOUT } from './userActions'

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
      return {
        ...state,
        ...action.payload,
      }
    case LOGOUT:
      return initialState
    default:
      return state
  }
}

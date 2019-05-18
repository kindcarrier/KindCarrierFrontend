// @flow
export const LOGIN_SUCCEEDED = 'LOGIN_SUCCEEDED'
export const SIGNUP_SUCCEEDED = 'SIGNUP_SUCCEEDED'
export const LOGOUT = 'LOGOUT'
export const USER_UPDATED = 'USER_UPDATED'

type userAction = {
  type: string,
  payload?: User | null,
}

export const loginSucceed = (payload: User | null): userAction => ({
  type: LOGIN_SUCCEEDED,
  payload,
})

export const signupSucceed = (payload: User | null): userAction => ({
  type: SIGNUP_SUCCEEDED,
  payload,
})

export const logOut = (): userAction => ({
  type: LOGOUT,
})

export const userUpdated = (payload: User | null): userAction => ({
  type: USER_UPDATED,
  payload,
})

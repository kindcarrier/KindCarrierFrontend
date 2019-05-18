// @flow
import { API_URL } from 'consts'
import checkError from './checkError'

type SignupParams = {
  first_name: string,
  last_name: string,
  email: string,
  password: string,
}

export default function signup(params: SignupParams): Promise<Object> {
  return fetch(`${API_URL}/users`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(params),
    })
    .then(checkError)
}

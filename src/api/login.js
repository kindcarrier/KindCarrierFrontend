// @flow
import { API_URL } from 'consts'
import checkError from './checkError'

type LoginParams = {
  email: string,
  password: string,
}

export default function login(params: LoginParams): Promise<Object> {
  return fetch(`${API_URL}/session`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(params),
    })
    .then(checkError)
}

// @flow
import { API_URL } from 'consts'

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
    .then((res) => {
      if (!res.ok) throw new Error('Ошибка сервера')
      return res.json()
    })
    .catch(error => console.log(error))
}

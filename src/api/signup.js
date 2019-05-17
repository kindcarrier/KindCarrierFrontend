// @flow
import { API_URL } from 'consts'

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
    .then((res) => {
      if (!res.ok) throw new Error('Ошибка сервера')
      return res.json()
    })
    .catch(error => console.log(error))
}

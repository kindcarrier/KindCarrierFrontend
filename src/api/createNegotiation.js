// @flow
import { API_URL } from 'consts'
import defaultHeader from 'utils/defaultHeader'
import checkError from './checkError'

type NegotiationParams = {
  name: string,
  description: string,
  cost: string,
  owner_id: number
}

export default function createNegotiation(params: NegotiationParams): Promise<any> {
  return fetch(`${API_URL}/negotiations`,
    {
      method: 'POST',
      headers: defaultHeader(),
      body: JSON.stringify(params),
    })
    .then(checkError)
}

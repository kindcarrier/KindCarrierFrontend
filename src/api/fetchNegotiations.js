// @flow
import { API_URL } from 'consts'
import checkError from './checkError'

export default function fetchNegotiations(): Promise<Negotiation[]> {
  return fetch(`${API_URL}/negotiations`,
    {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
    .then(checkError)
}

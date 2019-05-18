// @flow
import { API_URL } from 'consts'
import defaultHeader from 'utils/defaultHeader'
import checkError from './checkError'

export default function uploadImage(id: number, img: File): Promise<any> {
  const fd = new FormData()
  fd.append('avatar', img)
  const headers = defaultHeader()
  delete headers['Content-Type']
  return fetch(`${API_URL}/users/${id}`,
    {
      method: 'PUT',
      headers,
      body: fd,
    })
    .then(checkError)
}

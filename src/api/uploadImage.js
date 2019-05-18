// @flow
import { API_URL } from 'consts'
import defaultHeader from 'utils/defaultHeader'

export default function uploadImage(id: number, img: File): Promise<any> {
  const fd = new FormData()
  fd.append('avatar', img)
  const headers = defaultHeader()
  headers['Content-Type'] = null
  return fetch(`${API_URL}/users/${id}`,
    {
      method: 'PUT',
      headers,
      body: fd,
    })
    .then(res => res.json())
    .catch(error => console.error(error.message))
}

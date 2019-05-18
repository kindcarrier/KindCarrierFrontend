// @flow
export default async function checkError(res: any): Promise<any> {
  const json = await res.json()
    .catch(() => null)
  if (res.ok && json) return json
  if (json && json.message) throw new Error(json.message)
  switch (res.status) {
    case 401:
      throw new Error('Ошибка авторизации')
    default:
      throw new Error('Ошибка сервера')
  }
}

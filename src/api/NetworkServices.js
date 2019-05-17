// @flow

class NetworkServices {
  async getResource(url) {
    const res = await fetch(url)
    if (!res.ok) throw new Error('Сервер недоступен')
    return res.json()
  }
}

export default NetworkServices

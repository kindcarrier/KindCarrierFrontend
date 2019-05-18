import login from 'api/login'
import { API_URL } from 'consts'

describe('loginAPI call', () => {
  test('correct credentials return user', async () => {
    fetch.once(JSON.stringify({ id: '12345' }))
    const params = { email: 'test@test.com', password: '123456' }
    const body = JSON.stringify({
      email: 'test@test.com',
      password: '123456',
    })
    const res = await login(params)
    expect(res).toEqual({ id: '12345' })
    const targetUrl = fetch.mock.calls[0][0]
    expect(targetUrl).toBe(`${API_URL}/session`)
    const req = fetch.mock.calls[0][1]
    expect(req.method).toBe('POST')
    expect(req.body).toEqual(body)
  })
})

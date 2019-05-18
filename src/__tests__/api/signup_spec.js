import signup from 'api/signup'
import { API_URL } from 'consts'

describe('signupAPI call', () => {
  test('correct credentials return user', async () => {
    fetch.once(JSON.stringify({ id: '12345' }))
    const params = { first_name: 'John', last_name: 'Doe', email: 'test@test.com', password: '123456' }
    const body = JSON.stringify({
      first_name: 'John',
      last_name: 'Doe',
      email: 'test@test.com',
      password: '123456',
    })
    const res = await signup(params)
    expect(res).toEqual({ id: '12345' })
    const targetUrl = fetch.mock.calls[0][0]
    expect(targetUrl).toBe(`${API_URL}/users`)
    const req = fetch.mock.calls[0][1]
    expect(req.method).toBe('POST')
    expect(req.body).toEqual(body)
  })
})

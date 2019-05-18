import defaultHeader from 'utils/defaultHeader'

jest.mock('store', () => ({
  store: {
    getState: jest.fn(() => ({
      user: { token: '123456' },
    })),
  },
}))
test('returns default header', () => {
  const header = defaultHeader()
  expect(header).toEqual({ Authorization: '123456', 'Content-Type': 'application/json' })
})

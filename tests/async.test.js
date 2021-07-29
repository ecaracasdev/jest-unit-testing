const getData = require('../src/promise')
const url = require('../config').api.url

describe('promise', () => {
  test('should return Rick Sanches Name', async () => {
    const response = await getData(url)
    expect(response.data.name).toBe('Rick Sanchez')
  })

  test('the fetch fails with an error', async () => {
    expect.assertions(1);
    try {
      await getData('url')
    } catch (e) {
      expect(e).not.toBeNull()
    }
  })
})
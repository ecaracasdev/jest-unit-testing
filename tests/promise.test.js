const getData = require('../src/promise')
const url = require('../config').api.url

describe('promise', () => {
  test('should return rick sanchez data', () => {
    return getData(url).then(response => {
      expect(response.data.name).toBe('Rick Sanchez')
    })
  })

  test('the fetch fails with an error', () => {
    expect.assertions(1)
    return getData('url').catch(e => expect(e).not.toBeNull())
  })
})
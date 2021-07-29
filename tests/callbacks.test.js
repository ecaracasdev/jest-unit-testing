const fetchAPI = require('../src/callbacks')
const url = require('../config').api.url

it('should return Rick Sanchez data', done => {
  function callback(err, data) {
    try {
      expect(err).toBeNull()
      expect(data).not.toBeNull()
      expect(data.name).toBe('Rick Sanchez')
      done()
    } catch (err) {
      done(err)
    }
  }

  fetchAPI(url, callback)
})


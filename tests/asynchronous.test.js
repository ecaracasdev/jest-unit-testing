const fetchAPI = require('../src/asynchronous')
const API = 'https://rickandmortyapi.com/api/character/1'

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

    fetchAPI(API, callback)
  })
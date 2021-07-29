const axios = require('axios')

async function getData(url) {
  return await axios.get(url)
}

module.exports = getData
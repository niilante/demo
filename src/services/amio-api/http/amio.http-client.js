const axios = require('axios')

const amioHttpClient = axios.create({
  baseURL: 'https://app.amio.io/api/v1',
  headers: {'X-Requested-With': 'XMLHttpRequest'}
})

amioHttpClient.interceptors.request.use(config => {
  config.headers['Authorization'] = `Bearer ${process.env.AMIO_ACCESS_TOKEN}`
  return config
})

module.exports = amioHttpClient

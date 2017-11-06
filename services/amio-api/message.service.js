const amioHttpClient = require('./http/amio.http-client')

class MessageService {

  constructor() {
    this.path = '/messages'
  }

  sendMessage(message) {
    return amioHttpClient
      .post(this.path, message)
      .then(response => response.data)
  }

}

module.exports = new MessageService()

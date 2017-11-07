const amioHttpClient = require('./http/amio.http-client')

class MessageService {

  constructor() {
    this.path = '/messages'
  }

  sendMessage(contact, channel, content) {
    const message = {
      contact,
      channel,
      content
    }


    return amioHttpClient
      .post(this.path, message)
      .then(response => response.data)
  }

}

module.exports = new MessageService()

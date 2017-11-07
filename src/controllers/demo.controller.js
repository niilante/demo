const debug = require('debug')('amio-demo:routing-records.controller')
const messageService = require('../services/amio-api/message.service')


class DemosController {

  static async sendReceipt(req, res, next) {
    debug('addRecord() - body: ', req.body, ', params: ', req.params)
    const {channel, phoneNumber, firstName, lastName} = req.body

    const contact = {
      phone_number: phoneNumber,
      first_name: firstName,
      last_name: lastName
    }

    const content = {
      type: "text",
      payload: "Hello world!"
    }

    await messageService.sendMessage(contact, channel, content)
    res.json("ok")
  }

  static async sendText(req, res, next) {

  }

  static async sendQuickReplies(req, res, next) {

  }
}

module.exports = DemosController

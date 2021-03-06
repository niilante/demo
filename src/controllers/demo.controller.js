const debug = require('debug')('amio-demo:demo.controller')
const messageService = require('../services/amio-api/message.service')


class DemosController {

  static async sendReceipt(req, res, next) {
    debug('sendReceipt() - body: ', req.body, ', params: ', req.params)
    const {channel, contact} = req.body

    const content = {
      "type": "receipt",
      "payload": createReceiptPayload()
    }

    await messageService.sendMessage(contact, channel, content)
    res.json("ok")
  }

  static async sendOrderReady(req, res, next) {
    debug('sendOrderReady() - body: ', req.body, ', params: ', req.params)
    const {channel, contact} = req.body

    const contentText = {
      "type": "text",
      "payload": "Vase objednavka 169735313 je po dobu 4 dní pripavena na centrále Alza.cz Jateční 33a, Praha, Po-Ne 0-24. PIN: 8450"
    }

    const contentStructure = {
      "type": "structure",
      "payload": createButtonsPayload()
    }


    await messageService.sendMessage(contact, channel, contentText)
    await messageService.sendMessage(contact, channel, contentStructure)
    res.json("ok")
  }

  static async sendRecommendations(req, res, next) {
    debug('sendRecommendations() - body: ', req.body, ', params: ', req.params)
    const {channel, contact} = req.body

    const content = {
      "type": "structure",
      "payload": createRecommendationsPayload()
    }

    await messageService.sendMessage(contact, channel, content)
    res.json("ok")

  }
}


function createRecommendationsPayload() {
  return [
    {
      "title": "iPhone 7 32GB",
      "text": "16 490,-",
      "image_url": "https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphonese/gallery2/iphonese-gallery2-2016_GEO_US?wid=835&hei=641&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1482358620080",
      "item_url": "https://www.alza.cz/iphone-se?dq=4827679",
      "buttons": [
        {
          "type": "url",
          "title": "View",
          "payload": "https://www.alza.cz/iphone-se?dq=4827679"
        }
      ]
    },
    {
      "title": "iPhone SE 16GB",
      "text": "8 000 ,-",
      "image_url": "https://www.imore.com/sites/imore.com/files/styles/larger/public/field/image/2017/03/red-iphone-7-angle.jpg?itok=ulAgOorG",
      "item_url": "https://www.alza.cz/iphone-se?dq=4827679",
      "buttons": [
        {
          "type": "url",
          "title": "View",
          "payload": "https://www.alza.cz/iphone-se?dq=4827679"
        }
      ]
    },
    {
      "title": "iPhone 5",
      "text": "11 639 ,-",
      "image_url": "https://blogs-images.forbes.com/gordonkelly/files/2017/07/Screen-2d.jpg",
      "item_url": "https://www.alza.cz/iphone-se?dq=4827679",
      "buttons": [
        {
          "type": "url",
          "title": "View",
          "payload": "https://www.alza.cz/iphone-se?dq=4827679"
        }
      ]
    }
  ]
}

function createButtonsPayload() {
  return {
    "title": "Co pro Vás můžeme udělat?",
    "buttons": [
      {
        "type": "url",
        "title": "Administrace",
        "payload": "https://www.alza.cz/muj-ucet/objednavky.htm"
      },
      {
        "type": "url",
        "title": "Mapa pobočky",
        "payload": "https://www.google.cz/maps/place/Alza.cz/@50.0187822,14.4139146,11z/data=!4m8!1m2!2m1!1salza!3m4!1s0x0:0xfa40453d9fa60a30!8m2!3d50.0312323!4d14.533968?hl=en"
      },
      {
        "type": "url",
        "title": "Kontaktní formulář",
        "payload": "https://www.alza.cz/kontakt/"
      }
    ]
  }
}

function createReceiptPayload() {
  return {
    "order_id": "MUST BE UNIQUE = order_number",
    "timestamp": "2017-01-19T10:31:00Z",
    "currency": "CZK",
    "payment_method": "Payment method details. This can be a custom string. ex: \"Visa 1234\".",
    "url_order": "http://petersapparel.parseapp.com/order?order_id=123456",
    "shipping_address": {
      "name": "Stephane Crozatier",
      "address_line_1": "Ve smečkách 46",
      "address_line_2": "Amio s.r.o.",
      "city": "Praha",
      "postal_code": "11000",
      "state": "Prague = State abbreviation or Region/Province (international)",
      "country_code": "CZ"
    },
    "items": [
      {
        "title": "Classic White T-Shirt",
        "text": "100% Soft and Luxurious Cotton",
        "quantity": 2,
        "price": 50,
        "image_url": "https://storage.amio.io/Lovelyloops.jpg"
      }
    ],
    "summary": {
      "shipping": 4.95,
      "tax": 6.19,
      "total": 56.14
    }
  }

}

module.exports = DemosController

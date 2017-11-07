const express = require('express')
const router = express.Router()
const errorHandlerMiddleware = require('../middleware/async-error-handler.middleware')
const demosController = require('./demo.controller')

router.post('/demos/receipt', errorHandlerMiddleware(demosController.sendReceipt))
router.post('/demos/order-ready', errorHandlerMiddleware(demosController.sendOrderReady))
router.post('/demos/recommendations', errorHandlerMiddleware(demosController.sendRecommendations))


router.get('/', function(req, res, next) {
  res.render('index', { channelId: process.env.AMIO_CHANNEL_ID });
});

module.exports = router;

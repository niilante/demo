const express = require('express')
const router = express.Router()
const errorHandlerMiddleware = require('../middleware/async-error-handler.middleware')
const demosController = require('./demo.controller')

router.post('/demos/receipt', errorHandlerMiddleware(demosController.sendReceipt))
router.post('/demos/text', errorHandlerMiddleware(demosController.sendText))
router.post('/demos/quick-replies', errorHandlerMiddleware(demosController.sendQuickReplies))


router.get('/', function(req, res, next) {
  res.render('index', { domain: 'Express' });
});

module.exports = router;

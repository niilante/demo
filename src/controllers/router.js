const express = require('express')
const router = express.Router()
const errorHandlerMiddleware = require('../middleware/async-error-handler.middleware')
const demosController = require('./demo.controller')

router.post('/demos/receipt', errorHandlerMiddleware(demosController.sendReceipt))
router.post('/demos/plain-text', errorHandlerMiddleware(demosController.sendText))
router.post('/demos/choices', errorHandlerMiddleware(demosController.sendButtons))


router.get('/', function(req, res, next) {
  res.render('index', { domain: 'Express' });
});

module.exports = router;

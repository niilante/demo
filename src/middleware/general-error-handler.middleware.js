const debug = require('debug')('amio-demo:middleware.general-error-handler')

module.exports = (err, req, res, next) => {
  debug(err, err.stack)

  if(err.isBoom){
    const boomError = err
    res.status(boomError.output.statusCode)
    res.json({
      timestamp: (new Date()).toISOString(),
      status: {
        code: boomError.output.statusCode,
        message: boomError.output.error,
      },
      errors: [{
        field: boomError.data.field,
        rejected_value: boomError.data.rejectedValue,
        message: boomError.message
      }]
    })
    return
  }

  // if (!err.status || err.status >= 500) mailLogger.send(err.stack)

  res.status(err.status || 500)
  res.json(`error - ${err.message}`)
}

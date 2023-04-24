/**
 * logs into application
 *
 * @param error - error
 * @param next - next
 *
 * @returns return logs into application
 */
function logs(err, res, next) {
    console.error(err);
    next(err);
}
 
/**
 * send 500 error into application
 *
 * @param err - error
 * @param res - response
 *
 * @returns send 500 error
 */
function sendError(err, res, next) {
    res.status(500).json({
        message: err.message,
        stack: err.stack,
    });
}

/**
 * validate error when isBoom
 *
 * @param error - error
 * @param next - next
 * @param res - response
 *
 * @returns When error is Boom object instance, the response is formatted
 */
function boomErrorFormat(err, res, next) {
    if (err.isBoom) {
      const { output } = err;
      res.status(output.statusCode).json(output.payload);
    } else {
        next(err);
    }
  }
  
  
  module.exports = { boomErrorFormat, logs, sendError }
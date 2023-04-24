const boom = require('@hapi/boom');

/**
   * Validate query params
   *
   * @param req - request
   * @param next - next
   * 
   * @returns Validation query params (next or error)
   */
const validateParams = (req, res, next) => {
    const { search } = req.query;
    if (search) next();
    else throw boom.notFound('Query params not found');
};

module.exports = validateParams;
const ERROR_RATE_MSG = { message: 'O campo "rate" deve ser um número inteiro entre 1 e 5' };
const HTTP_BAD_REQUEST_STATUS = 400;

const verifyRateForSearch = (req, res, next) => {
    const { rate } = req.query;
    
    if (!rate) {
      return next();
    }
    if (rate < 1 || rate > 5 || !Number.isInteger(+rate)) {
      return res.status(HTTP_BAD_REQUEST_STATUS).json(ERROR_RATE_MSG);
    }
    next();
  };

  module.exports = {
    verifyRateForSearch,
  };
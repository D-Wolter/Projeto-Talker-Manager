const HTTP_BAD_REQUEST_STATUS = 400;
const BAD_REQUEST_MSG = { message: 'O campo "rate" é obrigatório' };
const VALID_NUMBER_MSG = { message: 'O campo "rate" deve ser um número inteiro entre 1 e 5' };

const verifyRateForEdit = (req, res, next) => {
    const { rate } = req.body;
  
    if (rate === undefined) {
      return res.status(HTTP_BAD_REQUEST_STATUS)
      .json(BAD_REQUEST_MSG);
    }
  
    if (!Number.isInteger(rate) || rate < 1 || rate > 5) {
        return res.status(HTTP_BAD_REQUEST_STATUS)
        .json(VALID_NUMBER_MSG);
    }
  
    next();
  };

  module.exports = {
    verifyRateForEdit,
};
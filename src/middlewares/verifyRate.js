const verifyRate = (req, res, next) => {
    const NOT_FOUND = { message: 'O campo "rate" é obrigatório' };
    const NOT_VALID_NUMBER = {
      message: 'O campo "rate" deve ser um número inteiro entre 1 e 5',
    };

    const { talk } = req.body;

    if (talk.rate === undefined) {
      return res.status(400).json(NOT_FOUND);
    }
    if (talk.rate < 1 || talk.rate > 5 || !Number.isInteger(talk.rate)) {
      return res.status(400).json(NOT_VALID_NUMBER);
    }
  
    next();
  };

  module.exports = {
    verifyRate,
  };
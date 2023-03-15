const verifyAge = (req, res, next) => {
    const NOT_FOUND = { message: 'O campo "age" é obrigatório' };
    const MIN_CHAR = { message: 'O campo "age" deve ser um número inteiro igual ou maior que 18' };

    const { age } = req.body;
    
    if (!age) {
      return res.status(400).json(NOT_FOUND);
    }
    if (Number.isInteger(age) === false || age < 18) {
      return res.status(400).json(MIN_CHAR);
    }
    next();
  };

module.exports = {
    verifyAge,
};
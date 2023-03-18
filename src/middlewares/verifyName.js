const NOT_FOUND = { message: 'O campo "name" é obrigatório' };
const NOT_HAVE_MIN_CHAR = { message: 'O "name" deve ter pelo menos 3 caracteres' };
const HTTP_BAD_REQUEST_STATUS = 400;

const verifyName = (req, res, next) => {
    const { name } = req.body;

    if (!name) {
      return res.status(HTTP_BAD_REQUEST_STATUS).json(NOT_FOUND);
    }
    if (name.length < 3) {
      return res.status(HTTP_BAD_REQUEST_STATUS).json(NOT_HAVE_MIN_CHAR);
    }
    next();
  };

  module.exports = {
    verifyName,
  };
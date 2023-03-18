const mailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
const EMAIL_ERROR_MSG = { message: 'O campo "email" é obrigatório' };
const FORMAT_ERROR_MSG = { message: 'O "email" deve ter o formato "email@email.com"' };
const PASS_ERROR_MSG = { message: 'O campo "password" é obrigatório' };
const PASS_VALID_MSG = { message: 'O "password" deve ter pelo menos 6 caracteres' };
const HTTP_BAD_REQUEST_STATUS = 400;

const checkLoginValid = (req, res, next) => {
  const { email, password } = req.body;
  if (!email) {
    return res.status(HTTP_BAD_REQUEST_STATUS).json(EMAIL_ERROR_MSG);
  }
  if (!mailRegex.test(email)) {
    return res.status(HTTP_BAD_REQUEST_STATUS)
      .json(FORMAT_ERROR_MSG);
  }
  if (!password) {
    return res.status(HTTP_BAD_REQUEST_STATUS).json(PASS_ERROR_MSG);
  }

  if (password.length < 6) {
    return res.status(HTTP_BAD_REQUEST_STATUS)
      .json(PASS_VALID_MSG);
  }
  next();
};

module.exports = checkLoginValid;
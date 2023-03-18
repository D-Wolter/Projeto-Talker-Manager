const { Router } = require('express');
const checkLoginValid = require('../middlewares/checkLoginValid');
const generateToken = require('../utils/cryptoTokenGenerate');

const loginTalkerRouter = Router();
const HTTP_OK_STATUS = 200;

loginTalkerRouter.post('/', checkLoginValid, async (_req, res) => {
    const token = generateToken();
    return res.status(HTTP_OK_STATUS).json({ token });
  });

module.exports = {
  loginTalkerRouter,
};

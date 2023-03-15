const { Router } = require('express');
const checkLoginValid = require('../middlewares/checkLoginValid');
const generateToken = require('../middlewares/cryptoTokenGenerate');

const loginTalkerRouter = Router();

loginTalkerRouter.post('/', checkLoginValid, async (_req, res) => {
    const token = generateToken();
    return res.status(200).json({ token });
  });

module.exports = {
  loginTalkerRouter,
};

const { Router } = require('express');
const { checkLoginValid, generateToken } = require('../middlewares');

const loginTalkerRouter = Router();

loginTalkerRouter.post('/', checkLoginValid, async (_req, res) => {
    const token = generateToken();
    return res.status(200).json({ token });
  });

module.exports = {
  loginTalkerRouter,
};

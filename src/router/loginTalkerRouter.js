const { Router } = require('express');
const mid = require('../middlewares/index');
const util = require('../utils/index');

const loginTalkerRouter = Router();
const HTTP_OK_STATUS = 200;

loginTalkerRouter.post('/', mid.checkLoginValid, async (_req, res) => {
    const token = util.generateToken();
    return res.status(HTTP_OK_STATUS).json({ token });
  });

module.exports = {
  loginTalkerRouter,
};

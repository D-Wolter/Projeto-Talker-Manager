const { Router } = require('express');
const util = require('../utils/index');

const getTalkerRouter = Router();

const HTTP_OK_STATUS = 200;

getTalkerRouter.get('/', async (_req, res) => {
    const talkers = await util.readFile();
  
    if (!talkers) {
      return res.status(HTTP_OK_STATUS).json([]);
    }
  
    return res.status(HTTP_OK_STATUS).json(talkers);
  });

module.exports = {
  getTalkerRouter,
};

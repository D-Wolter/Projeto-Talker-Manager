const { Router } = require('express');
const path = require('path');
const { fsReadDB } = require('../middlewares');

const dataJsonPath = path.resolve(__dirname, '../talker.json');

const allTalkersRouter = Router();

allTalkersRouter.get('/', async (_req, res) => {
    const talkers = await fsReadDB(dataJsonPath);
  
    if (!talkers) {
      return res.status(200).json([]);
    }
  
    return res.status(200).json(talkers);
  });

module.exports = {
  allTalkersRouter,
};

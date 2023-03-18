const { Router } = require('express');
const path = require('path');
const fsReadDB = require('../middlewares/fsRead');

const dataJsonPath = path.resolve(__dirname, '../talker.json');
const HTTP_OK_STATUS = 200;

const allTalkersRouter = Router();

allTalkersRouter.get('/', async (_req, res) => {
    const talkers = await fsReadDB(dataJsonPath);
  
    if (!talkers) {
      return res.status(HTTP_OK_STATUS).json([]);
    }
  
    return res.status(HTTP_OK_STATUS).json(talkers);
  });

module.exports = {
  allTalkersRouter,
};

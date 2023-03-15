const { Router } = require('express');
const path = require('path');
const fsReadDB = require('../middlewares/fsRead');
const talkerById = require('../middlewares/getTalkerId');

const dataJsonPath = path.resolve(__dirname, '../talker.json');

const talkerRouter = Router();

talkerRouter.get('/', async (_req, res) => {
    const talkers = await fsReadDB(dataJsonPath);
  
    if (!talkers) {
      return res.status(200).json([]);
    }
  
    return res.status(200).json(talkers);
  });

  talkerRouter.get('/:id', async (req, res) => {
    const { id } = req.params;
    const talkerId = await talkerById.getTalkerId(id);
    
    if (!talkerId) {
      return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
    }
    return res.status(200).json(talkerId);
  });

  module.exports = {
    talkerRouter,
  };
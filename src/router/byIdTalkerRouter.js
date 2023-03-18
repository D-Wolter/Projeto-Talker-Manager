const { Router } = require('express');
const path = require('path');
const fsReadDB = require('../middlewares/fsRead');

const dataJsonPath = path.resolve(__dirname, '../talker.json');
const HTTP_OK_STATUS = 200;

const byIdTalkerRouter = Router();

byIdTalkerRouter.get('/:id', async (req, res) => {
    const { id } = req.params;
    const talkers = await fsReadDB(dataJsonPath);
    const talkerId = talkers.find((talker) => talker.id === +id);
  
    if (!talkerId) {
      res.status(404).json({ message: 'Pessoa palestrante não encontrada' }); 
    } 
  
    return res.status(HTTP_OK_STATUS).json(talkerId);
  });

module.exports = {
  byIdTalkerRouter,
};

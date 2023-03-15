const { Router } = require('express');
const path = require('path');
const { fsReadDB } = require('../middlewares');

const dataJsonPath = path.resolve(__dirname, '../talker.json');

const byIdTalkerRouter = Router();

byIdTalkerRouter.get('/:id', async (req, res) => {
    const { id } = req.params;
    const talkers = await fsReadDB(dataJsonPath);
    const talkerId = talkers.find((talker) => talker.id === +id);
  
    if (!talkerId) {
      res.status(404).json({ message: 'Pessoa palestrante não encontrada' }); 
    } 
  
    return res.status(200).json(talkerId);
  });

module.exports = {
  byIdTalkerRouter,
};

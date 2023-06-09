const { Router } = require('express');
const util = require('../utils/index');

const getByIdTalkerRouter = Router();

const HTTP_OK_STATUS = 200;
const HTTP_NOT_FOUND_STATUS = 404;
const NOT_FOUND_MSG = { message: 'Pessoa palestrante não encontrada' };

getByIdTalkerRouter.get('/:id', async (req, res) => {
    const { id } = req.params;
    const talkers = await util.readFile();
    const talkerId = talkers.find((talker) => talker.id === +id);
  
    if (!talkerId) {
      res.status(HTTP_NOT_FOUND_STATUS).json(NOT_FOUND_MSG); 
    } 
  
    return res.status(HTTP_OK_STATUS).json(talkerId);
  });

module.exports = {
  getByIdTalkerRouter,
};

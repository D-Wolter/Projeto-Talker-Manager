const { Router } = require('express');
const mid = require('../middlewares/index');
const util = require('../utils/index');

const HTTP_NOT_FOUND_STATUS = 404;
const HTTP_NO_CONTENT_STATUS = 204;
const NOT_FOUND_MSG = { message: 'Pessoa palestrante não encontrada' };

const editRateByIdRouter = Router();

editRateByIdRouter.patch('/:id', mid.verifyToken, mid.verifyRateForEdit, async (req, res) => {
    const { id } = req.params;
    const { rate } = req.body;
  
    const talkers = await util.readFile();
    const index = talkers.findIndex((item) => item.id === +id);
    if (index < 1) { 
        return res.status(HTTP_NOT_FOUND_STATUS)
        .json(NOT_FOUND_MSG);
    }
    talkers[index] = {
      ...talkers[index],
      talk: { ...talkers[index].talk, rate },
    };
    await util.writeFile(JSON.stringify(talkers, null, 2));
    res.status(HTTP_NO_CONTENT_STATUS).send();
  });

module.exports = {
    editRateByIdRouter,
  };  
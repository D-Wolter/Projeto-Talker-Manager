const { Router } = require('express');
const mid = require('../middlewares/index');
const util = require('../utils/index');

const editTalkerRouter = Router();
const NOT_FOUND_MSG = { message: 'Pessoa palestrante não encontrada' };
const HTTP_OK_STATUS = 200;
const HTTP_NOT_FOUND_STATUS = 404;

editTalkerRouter.put('/:id', 
mid.verifyToken,
mid.verifyAge,
mid.verifyName,
mid.verifyTalk, 
mid.verifyRate,
async (req, res) => {
  const reqID = req.params.id;
  const talker = await util.readFile();
  const findTalkerId = talker.find(({ id }) => id === Number(reqID));
  
  if (findTalkerId === undefined) {
    return res.status(HTTP_NOT_FOUND_STATUS).json(NOT_FOUND_MSG);
  }
  const talkerId = findTalkerId.id;
  console.log(talkerId);
  const { name, age, talk } = req.body;
  const createnew = { name, age, id: talkerId, talk };
  
  await util.editTalker(talkerId, createnew);

  res.status(HTTP_OK_STATUS).json(createnew);
});

module.exports = {
  editTalkerRouter,
};

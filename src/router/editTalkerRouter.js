const { Router } = require('express');
const { verifyToken } = require('../middlewares/verifyToken');
const { verifyAge } = require('../middlewares/verifyAge');
const { verifyName } = require('../middlewares/verifyName');
const { verifyTalk } = require('../middlewares/verifyTalk');
const { verifyRate } = require('../middlewares/verifyRate');
const { editTalker } = require('../middlewares/editTalker');
const { readFile } = require('../utils/readFile');

const editTalkerRouter = Router();
const NOT_FOUND_MSG = { message: 'Pessoa palestrante não encontrada' };
const HTTP_OK_STATUS = 200;
const HTTP_NOT_FOUND_STATUS = 404;

editTalkerRouter.put('/:id', 
verifyToken, verifyAge, verifyName, verifyTalk, 
verifyRate,
async (req, res) => {
  const reqID = req.params.id;
  const talker = await readFile();
  const findTalkerId = talker.find(({ id }) => id === Number(reqID));
  
  if (findTalkerId === undefined) {
    return res.status(HTTP_NOT_FOUND_STATUS).json(NOT_FOUND_MSG);
  }
  const talkerId = findTalkerId.id;
  console.log(talkerId);
  const { name, age, talk } = req.body;
  const createnew = { name, age, id: talkerId, talk };
  
  await editTalker(talkerId, createnew);

  res.status(HTTP_OK_STATUS).json(createnew);
});

module.exports = {
  editTalkerRouter,
};

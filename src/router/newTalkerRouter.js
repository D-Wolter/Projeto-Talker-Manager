const { Router } = require('express');
const { verifyToken } = require('../middlewares/verifyToken');
const { verifyAge } = require('../middlewares/verifyAge');
const { verifyName } = require('../middlewares/verifyName');
const { verifyTalk } = require('../middlewares/verifyTalk');
const { verifyRate } = require('../middlewares/verifyRate');
const { createNewTalker } = require('../middlewares/createNewTalker');

const newTalkerRouter = Router();
const HTTP_CREATED_STATUS = 201;

newTalkerRouter.post('/',
    verifyToken,
    verifyName,
    verifyAge,
    verifyTalk,
    verifyRate,
    async (req, res) => {
      const newTalker = req.body;
      const talker = await createNewTalker(newTalker);
      return res.status(HTTP_CREATED_STATUS).json(talker);
    });

module.exports = {
  newTalkerRouter,
};

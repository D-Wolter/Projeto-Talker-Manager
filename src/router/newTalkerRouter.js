const { Router } = require('express');
const mid = require('../middlewares/index');
const util = require('../utils/index');

const newTalkerRouter = Router();
const HTTP_CREATED_STATUS = 201;

newTalkerRouter.post('/',
    mid.verifyToken,
    mid.verifyName,
    mid.verifyAge,
    mid.verifyTalk,
    mid.verifyRate,
    async (req, res) => {
      const newTalker = req.body;
      const talker = await util.createNewTalker(newTalker);
      return res.status(HTTP_CREATED_STATUS).json(talker);
    });

module.exports = {
  newTalkerRouter,
};

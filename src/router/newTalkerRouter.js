const { Router } = require('express');
const {
    createNewTalker,
    verifyAge,
    verifyName,
    verifyRate,
    verifyTalk,
    verifyToken,
} = require('../middlewares');

const newTalkerRouter = Router();

newTalkerRouter.post('/',
    verifyToken,
    verifyName,
    verifyAge,
    verifyTalk,
    verifyRate,
    async (req, res) => {
      const newTalker = req.body;
      const talker = await createNewTalker(newTalker);
      return res.status(201).json(talker);
});

module.exports = {
  newTalkerRouter,
};

const { Router } = require('express');

const getAllTalkerDbRouter = Router();

const talkerMsqDb = require('../db/talkerMsqDb');

const HTTP_OK_STATUS = 200;

getAllTalkerDbRouter.get('/', async (_req, res) => {
  const [result] = await talkerMsqDb.talkerMsqDb();
  console.log(result);
  if (!result) return res.status(HTTP_OK_STATUS).json([]);

  const newLayout = result.map((talker) => (
    {
    name: talker.name,
    age: talker.age,
    id: talker.id,
    talk: {
      watchedAt: talker.talk_watched_at,
      rate: talker.talk_rate,
    },
  }));
  
  return res.status(HTTP_OK_STATUS).json(newLayout);
});

module.exports = {
    getAllTalkerDbRouter,
};

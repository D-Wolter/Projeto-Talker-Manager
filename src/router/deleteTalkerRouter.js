const { Router } = require('express');
const util = require('../utils/index');
const mid = require('../middlewares/index');

const HTTP_NO_CONTENT_STATUS = 204;

const deleteTalkerRouter = Router();

deleteTalkerRouter.delete('/:id', mid.verifyToken, async (req, res) => {
    const { id } = req.params;
    await util.deleteTalker(Number(id));
    res.status(HTTP_NO_CONTENT_STATUS).end();
  });

module.exports = {
    deleteTalkerRouter,
};

const { Router } = require('express');
const { deleteTalker } = require('../middlewares/deleteTalker');
const { verifyToken } = require('../middlewares/verifyToken');

const HTTP_NO_CONTENT_STATUS = 204;

const deleteTalkerRouter = Router();

deleteTalkerRouter.delete('/:id', verifyToken, async (req, res) => {
    const { id } = req.params;
    await deleteTalker(Number(id));
    res.status(HTTP_NO_CONTENT_STATUS).end();
  });

module.exports = {
    deleteTalkerRouter,
};

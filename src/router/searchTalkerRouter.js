const { Router } = require('express');
const { verifyRateForSearch } = require('../middlewares/verifyRateForSearch');
const { verifyToken } = require('../middlewares/verifyToken');
const { searchTalker } = require('../utils/searchTalker');

const searchTalkerRouter = Router();

const regexDate = /^\d{2}\/\d{2}\/\d{4}$/;
const ERROR_MSG = { message: 'O parâmetro "date" deve ter o formato "dd/mm/aaaa"' };
const HTTP_OK_STATUS = 200;
const HTTP_BAD_REQUEST_STATUS = 400;

searchTalkerRouter.get('/', verifyToken, verifyRateForSearch, async (req, res) => {
    const { q, rate, date } = req.query;
    
    if (date && regexDate.test(date) === false) {
      return res.status(HTTP_BAD_REQUEST_STATUS).json(ERROR_MSG);
    }
   const result = await searchTalker(q, rate, date);
    return res.status(HTTP_OK_STATUS).json(result);
  });

module.exports = {
    searchTalkerRouter,
};
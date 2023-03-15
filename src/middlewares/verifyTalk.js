const verifyTalk = (req, res, next) => {
    const regex = /^\d{2}\/\d{2}\/\d{4}$/;
    const NOT_FOUND_TALK = { message: 'O campo "talk" é obrigatório' };
    const NOT_FOUND_WATCHED = { message: 'O campo "watchedAt" é obrigatório' };
    const NOT_VALID_DATA = {
      message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
    };
    const { talk } = req.body;

   if (!talk) {
      return res.status(400).json(NOT_FOUND_TALK);
    }
    if (!talk.watchedAt) {
      return res.status(400).json(NOT_FOUND_WATCHED);
    }
    if (regex.test(talk.watchedAt) === false) {
      return res.status(400).json(NOT_VALID_DATA);
    }
    next();
  };

  module.exports = {
    verifyTalk,
  };
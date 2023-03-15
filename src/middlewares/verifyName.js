const verifyName = (req, res, next) => {
    const NOT_FOUND = { message: 'O campo "name" é obrigatório' };
    const NOT_HAVE_MIN_CHAR = { message: 'O "name" deve ter pelo menos 3 caracteres' };
    
    const { name } = req.body;

    if (!name) {
      return res.status(400).json(NOT_FOUND);
    }
    if (name.length < 3) {
      return res.status(400).json(NOT_HAVE_MIN_CHAR);
    }
    next();
  };

  module.exports = {
    verifyName,
  };
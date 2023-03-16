const verifyToken = (req, res, next) => {
    const NOT_FOUND = { message: 'Token não encontrado' };
    const FOUND = { message: 'Token inválido' };
    
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json(NOT_FOUND);
    }
    if (
      authorization.length < 16
      || authorization.length > 16
      || typeof authorization !== 'string'
    ) {
      return res.status(401).json(FOUND);
    }
    next();
};

module.exports = { 
    verifyToken,
};
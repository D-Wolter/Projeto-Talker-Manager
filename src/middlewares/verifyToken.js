const verifyToken = (req, res, next) => {
    const UNAUTHORIZED_MSG = { message: 'Token não encontrado' };
    const UNAUTHORIZED_MSG2 = { message: 'Token inválido' };
    const HTTP_UNAUTHORIZED_STATUS = 401;
    
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(HTTP_UNAUTHORIZED_STATUS).json(UNAUTHORIZED_MSG);
    }
    if (
      authorization.length < 16
      || authorization.length > 16
      || typeof authorization !== 'string'
    ) {
      return res.status(HTTP_UNAUTHORIZED_STATUS).json(UNAUTHORIZED_MSG2);
    }
    next();
};

module.exports = { 
    verifyToken,
};
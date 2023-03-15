const checkLoginValid = require('./checkLoginValid');
const createNewTalker = require('./createNewTalker');
const generateToken = require('./cryptoTokenGenerate');
const fsReadDB = require('./fsRead');
const verifyAge = require('./verifyAge');
const verifyName = require('./verifyName');
const verifyRate = require('./verifyRate');
const verifyTalk = require('./verifyTalk');
const verifyToken = require('./verifyToken');

module.exports = {
    checkLoginValid,
    createNewTalker,
    generateToken,
    fsReadDB,
    verifyAge,
    verifyName,
    verifyRate,
    verifyTalk,
    verifyToken,
};
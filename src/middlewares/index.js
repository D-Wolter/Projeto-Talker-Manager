const { checkLoginValid } = require('./checkLoginValid');
const { verifyAge } = require('./verifyAge');
const { verifyName } = require('./verifyName');
const { verifyRate } = require('./verifyRate');
const { verifyRateForSearch } = require('./verifyRateForSearch');
const { verifyTalk } = require('./verifyTalk');
const { verifyToken } = require('./verifyToken');
const { verifyRateForEdit } = require('./verifyRateForEdit');

module.exports = {
    checkLoginValid,
    verifyAge,
    verifyName,
    verifyRate,
    verifyRateForSearch,
    verifyTalk,
    verifyToken,
    verifyRateForEdit,
};
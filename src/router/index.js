const { deleteTalkerRouter } = require('./deleteTalkerRouter');
const { editTalkerRouter } = require('./editTalkerRouter');
const { getByIdTalkerRouter } = require('./getByIdTalkerRouter');
const { getTalkerRouter } = require('./getTalkerRouter');
const { loginTalkerRouter } = require('./loginTalkerRouter');
const { newTalkerRouter } = require('./newTalkerRouter');
const { searchTalkerRouter } = require('./searchTalkerRouter');
const { editRateByIdRouter } = require('./editRateByIdRouter');
const { getAllTalkerDbRouter } = require('./getAllTalkerDbRouter');

module.exports = {
    deleteTalkerRouter,
    editTalkerRouter,
    getByIdTalkerRouter,
    getTalkerRouter,
    loginTalkerRouter,
    newTalkerRouter,
    searchTalkerRouter,
    editRateByIdRouter,
    getAllTalkerDbRouter,
};
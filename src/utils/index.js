const { createNewTalker } = require('./createNewTalker');
const { generateToken } = require('./cryptoTokenGenerate');
const { deleteTalker } = require('./deleteTalker');
const { editTalker } = require('./editTalker');
const { readFile } = require('./readFile');
const { searchTalker } = require('./searchTalker');
const { writeFile } = require('./writeFile');

module.exports = {
    createNewTalker,
    generateToken,
    deleteTalker,
    editTalker,
    readFile,
    searchTalker,
    writeFile,
};
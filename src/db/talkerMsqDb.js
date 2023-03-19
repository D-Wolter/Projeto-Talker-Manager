const { connection } = require('./connection');

const talkerMsqDb = () => connection.execute('SELECT * FROM talkers');

module.exports = {
    talkerMsqDb,
};
const fsRead = require('./fsRead');

const getTalkerId = async (id) => {
    const talkers = await fsRead();
    const talker = talkers.find((t) => t.id === +id);
    return talker;
  };

  module.exports = {
    getTalkerId,
  };
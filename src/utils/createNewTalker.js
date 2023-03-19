const { writeFile } = require('./writeFile');
const { readFile } = require('./readFile');

const createNewTalker = async (newUser) => {
    const talkers = await readFile();

    const newTalker = { id: talkers.length + 1, ...newUser };
    talkers.push(newTalker);
    await writeFile(JSON.stringify(talkers, null, 2));
    return newTalker;
  };

  module.exports = {
    createNewTalker,
  };
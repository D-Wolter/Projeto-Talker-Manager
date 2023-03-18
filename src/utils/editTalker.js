const { writeFile } = require('./writeFile');
const { readFile } = require('./readFile');

const editTalker = async (id, talker) => {
  const talkers = await readFile();

  const index = talkers.findIndex((t) => t.id === +id);
  talkers[index] = talker;
  const newTalker = JSON.stringify(talkers, null, 2);
  await writeFile(newTalker);
};

  module.exports = {
    editTalker,
  };
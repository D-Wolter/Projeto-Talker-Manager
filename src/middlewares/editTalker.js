// const fs = require('fs').promises;
// const path = require('path');
const { join } = require('path');
const { readFile } = require('../utils/readFile');
const { writeFile } = require('../utils/writeFile');

const PATH = join(__dirname, '../talker.json');

// async function editTalker(name, age, talk, findTalkerId) {
//   const talker = await fs.readFile(PATH);
//   const talkers = talker.indexOf(findTalkerId);
//   const talkerEdited = { name, age, id: findTalkerId.id, talk };
//   const newId = [...talker];
//   newId[talkers] = talkerEdited;
//   // const edited = await fs.writeFile(JSON_PATH, JSON.stringify(newId));
//   const edited = await fs.writeFile(path.resolve(__dirname, PATH), JSON.stringify(newId, null, 2));
//   return edited;
// }

const editTalker = async (id, talker) => {
  const talkers = await readFile(PATH);
  const index = talkers.findIndex((t) => t.id === +id);
  talkers[index] = talker;
  const newTalker = JSON.stringify(talkers, null, 2);
  await writeFile(newTalker);
};

  module.exports = {
    editTalker,
  };
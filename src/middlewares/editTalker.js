const fsReadDB = require("./fsRead");
const { join } = require('path');
const { writeFile } = require("../utils/writeFile");

const JSON_PATH = join(__dirname, '../talker.json');

const editTalker = async (id, talker) => {
  const talkers = await fsReadDB(JSON_PATH);
  
  const index = talkers.findIndex((t) => t.id === +id);
  talkers[index] = talker;
  const newTalker = JSON.stringify(talkers, null, 2);
  await writeFile(newTalker);
  console.log(newTalker);
};

  module.exports = {
    editTalker,
  };
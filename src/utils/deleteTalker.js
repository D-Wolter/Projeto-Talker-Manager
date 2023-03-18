const { readFile } = require('./readFile');
const { writeFile } = require('./writeFile');

const deleteTalker = async (id) => {
    const talkers = await readFile();
    const updated = talkers.filter((talker) => talker.id !== id);
  
    await writeFile(JSON.stringify(updated));
  };
  
module.exports = {
    deleteTalker,
  };
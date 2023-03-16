const fs = require('fs').promises;
const path = require('path');

const writeFile = async (file) => {
  const PATH_JSON = path.resolve(__dirname, '../talker.json');
  try {
    await fs.writeFile(PATH_JSON, file);
  } catch (err) {
    console.log(err.message);
    return null;
  }
};

module.exports = { 
    writeFile,
};
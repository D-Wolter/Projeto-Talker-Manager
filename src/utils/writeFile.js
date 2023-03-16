const fs = require('fs').promises;
const { join } = require('path');

const writeFile = async (file) => {
  const JSON_PATH = join(__dirname, '../talker.json');
  try {
    await fs.writeFile(JSON_PATH, file);
  } catch (err) {
    console.log(err.message);
    return null;
  }
};

module.exports = { 
    writeFile,
};
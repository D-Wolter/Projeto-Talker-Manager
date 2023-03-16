const fs = require('fs').promises;
const path = require('path');

const readFile = async () => {
  const PATH_JSON = path.resolve(__dirname, '../talker.json');
  try {
    const data = await fs.readFile(PATH_JSON);
    return JSON.parse(data);
  } catch (err) {
    console.log(err.message);
    return null;
  }
};

module.exports = {
    readFile,
};
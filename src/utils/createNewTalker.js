const fs = require('fs').promises;
const path = require('path');

const JSON_PATH = '../talker.json';

const createNewTalker = async (newUser) => {
    const data = await fs.readFile(path.resolve(__dirname, JSON_PATH), 'utf-8');
    const talkers = JSON.parse(data);
    
    const newTalker = { id: talkers.length + 1, ...newUser };
    talkers.push(newTalker);
    await fs.writeFile(path.resolve(__dirname, JSON_PATH), JSON.stringify(talkers, null, 2));
    return newTalker;
  };

  module.exports = {
    createNewTalker,
  };
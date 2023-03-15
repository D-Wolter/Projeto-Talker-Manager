const fs = require('fs').promises;

const fsReadDB = async (datajson) => {
    try {
        const data = await fs.readFile(datajson);
        return JSON.parse(data);
    } catch (e) {
        console.error(`Error reading: ${e}`);
    }
};

module.exports = fsReadDB;
const { readFile } = require('./readFile');

const searchTalker = async (q, rate, date) => {
    let talkers = await readFile();
   
   try {
     if (q) {
    talkers = talkers
       .filter((item) => item.name.toLowerCase().includes(q.toLowerCase()));
     }
     if (rate) {
       talkers = talkers.filter((item) => item.talk.rate === Number(rate));
     }
     if (date) {
       talkers = talkers.filter((item) => item.talk.watchedAt === date);
     }
     return talkers;
   } catch (error) {
     console.log(error);
   }
 };

 module.exports = {
    searchTalker,
 };
const crypto = require('crypto');

const configCryptonLenChar = 8;

const generateToken = () => {
  const token = crypto.randomBytes(configCryptonLenChar).toString('hex');
  return token;
};

module.exports = generateToken;
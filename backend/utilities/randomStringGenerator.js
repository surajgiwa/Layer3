// randomStringGenerator.js

const crypto = require('crypto');

// Function to generate a random string of specified length
const generateRandomString = (length) => {
  return crypto.randomBytes(Math.ceil(length / 2))
            .toString('hex') // Convert to hexadecimal format
            .slice(0, length); // Trim to desired length
};

module.exports = generateRandomString;

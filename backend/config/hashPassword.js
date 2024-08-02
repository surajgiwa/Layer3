// hashPassword.js
const bcrypt = require('bcrypt');

const plainTextPassword = 'surajlayer3';

bcrypt.hash(plainTextPassword, 10, (err, hash) => {
  if (err) {
    console.error('Error hashing password:', err);
  } else {
    console.log('Hashed password:', hash);
  }
});
 
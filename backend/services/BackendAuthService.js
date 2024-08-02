const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('./config/db'); // Corrected path

const BackendAuthService = {
  async login(email, password) {
    try {
      const user = await new Promise((resolve, reject) => {
        db.get('SELECT * FROM users WHERE email = ?', [email], (err, row) => {
          if (err) reject(err);
          else resolve(row);
        });
      });

      if (!user) {
        throw new Error('User not found');
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        throw new Error('Invalid credentials');
      }

      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

      return { success: true, token };
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, message: error.message };
    }
  },

  async signup(name, email, password) {
    try {
      const hashedPassword = await bcrypt.hash(password, 10);

      await new Promise((resolve, reject) => {
        const insertQuery = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
        db.run(insertQuery, [name, email, hashedPassword], function (err) {
          if (err) reject(err);
          else resolve();
        });
      });

      return { success: true, message: 'User registered successfully' };
    } catch (error) {
      console.error('Signup error:', error);
      return { success: false, message: error.message };
    }
  },

  async forgotPassword(email) {
    try {
      // Simulate email sending and return success message
      return { success: true, message: 'Password reset request sent' };
    } catch (error) {
      console.error('Forgot password error:', error);
      return { success: false, message: error.message };
    }
  }
};

module.exports = BackendAuthService;

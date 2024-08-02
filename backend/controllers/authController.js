// controllers/authController.js
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

// User Registration
exports.registerUser = async (req, res) => {
  const { name, email, password, adminCode } = req.body;

  const ADMIN_CODE = 'your_secret_admin_code'; // Define your secret admin code

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const isAdmin = adminCode === ADMIN_CODE; // Check if the provided admin code matches

    user = new User({
      name,
      email,
      password,
      isAdmin: isAdmin
    });

    // Save user
    await user.save();

    // Create JWT payload
    const payload = {
      id: user.id,
      isAdmin: user.isAdmin
    };

    // Sign JWT
    jwt.sign(
      payload,
      config.get('jwtSecret'),
      { expiresIn: '1h' },
      (err, token) => {
        if (err) throw err;
        res.json({ token, user });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// User Login
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // User authenticated successfully, generate JWT
    const payload = {
      user: {
        id: user.id,
        isAdmin: user.isAdmin // Include isAdmin in payload
      }
    };

    jwt.sign(
      payload,
      config.get('jwtSecret'),
      { expiresIn: '1h' },
      (err, token) => {
        if (err) throw err;
        res.json({ token, user: { id: user.id, isAdmin: user.isAdmin } }); // Send isAdmin in response
      }
    );
  } catch (err) {
    console.error('Error logging in:', err.message);
    res.status(500).send('Server error');
  }
};

// Forgot Password
exports.forgotPassword = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Please provide an email' });
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: 'Email not found' });
    }

    // For simplicity, we're just returning a success message.
    // In a real application, you would generate a password reset token and send it via email.
    res.status(200).json({ message: 'Password reset link sent to your email.' });
  } catch (err) {
    console.error('Server error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

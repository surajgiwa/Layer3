const jwt = require('jsonwebtoken');
const User = require('../models/User');

const protect = async (req, res, next) => {
  const token = req.header('x-auth-token');

  if (!token) {
    return res.status(401).json({ message: 'Authorization denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.user.id);

    if (!user) {
      return res.status(401).json({ message: 'User not authorized.' });
    }

    req.user = user;
    req.user.isAdmin = user.isAdmin || false;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Token is not valid.' });
  }
};

module.exports = protect;

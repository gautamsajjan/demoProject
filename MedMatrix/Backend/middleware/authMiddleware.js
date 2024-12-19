const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const customer = require('../models/customer'); // Ensure correct path to your models
const pharmacy = require('../models/pharmacy');

dotenv.config();

const authenticate = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Fetch user from either collection
    const user = await customer.findById(decoded.userId) || await pharmacy.findById(decoded.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Attach user information to the request object
    req.user = user;

    // Proceed to the next middleware/route handler
    next();
  } catch (error) {
    console.error('Token verification error:', error);
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
};

module.exports = authenticate;

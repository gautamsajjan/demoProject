
const express = require('express');
const router = express.Router();
const { signup, login } = require('../controllers/authController');
const { protectPharmacyRoute , protectCustomerRoute } = require ('../middleware/protectedRoute');
const verifyToken = require('../middleware/authMiddleware');

// Routes for signup and login
router.post('/signup', signup);
router.post('/', login);

// Protected routes
router.get('/pharmacy', protectPharmacyRoute, (req, res) => {
  res.status(200).json({ message: 'Welcome to the Pharmacy page' });
});

router.get('/customer',  protectCustomerRoute, (req, res) => {
  res.status(200).json({ message: 'Welcome to the Customer page' });
});

router.get('/verify-token', verifyToken, (req, res) => {
  res.status(200).json({ message: 'Token is valid', user: req.user });
});

module.exports = router;

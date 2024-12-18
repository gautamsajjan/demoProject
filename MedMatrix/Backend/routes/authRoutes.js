// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const { signup, login } = require('../controllers/authController');

// Routes for signup and login
router.post('/signup', signup);
router.post('/', login);

// Protected routes
router.get('/pharmacy', (req, res) => {
  res.status(200).json({ message: 'Welcome to the Pharmacy page' });
});

router.get('/customer',  (req, res) => {
  res.status(200).json({ message: 'Welcome to the Customer page' });
});

module.exports = router;

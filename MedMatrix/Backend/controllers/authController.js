// controllers/authController.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Pharmacy = require('../models/pharmacy');
const Customer = require('../models/customer');
const { PHARMACY_CODES } = require('../utils/tokenUtils');

const signup = async (req, res) => {
  const { fullName, email, phoneNumber, password, role, registrationCode, pharmacyName, pharmacyAddress } = req.body;
  
  try {
    if (role == 'customer') {
      const existingUser = await Customer.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const newCustomer = new Customer({
        fullName,
        email,
        phoneNumber,
        password,
        role: 'customer',
      });

      const savedCustomer = await newCustomer.save();
      const token = jwt.sign({ userId: savedCustomer._id, role: savedCustomer.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
      return res.status(201).json({ message: 'Customer registered', user: savedCustomer, token });
    }

    if (role == 'pharmacy') {
      const existingUser = await Pharmacy.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }

      if (!registrationCode || !PHARMACY_CODES.includes(registrationCode)) {
        return res.status(400).json({ message: 'Invalid or missing registration code' });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const newPharmacy = new Pharmacy({
        email,
        phone: phoneNumber,
        password,
        role: 'pharmacy',
        registrationCode,
        pharmacyName,
        pharmacyAddress, 
      });

      const savedPharmacy = await newPharmacy.save();
      const token = jwt.sign({ userId: savedPharmacy._id, role: 'pharmacy' }, process.env.JWT_SECRET, { expiresIn: '1h' });
      return res.status(201).json({ message: 'Pharmacy registered', user: savedPharmacy, token });
    }

    res.status(400).json({ message: 'Invalid role' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

const login = async (req, res) => {
  const { email, password, role } = req.body;
  try {
    let foundUser;
    if (role === 'customer') {
      foundUser = await Customer.findOne({ email });
    } else if (role === 'pharmacy') {
      foundUser = await Pharmacy.findOne({ email });
    }

    if (!foundUser) {
      return res.status(400).json({ message: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, foundUser.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: foundUser._id, role: foundUser.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token, user: foundUser });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

module.exports = { signup, login };

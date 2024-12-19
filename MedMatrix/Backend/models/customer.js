const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Customer Schema
const customerSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true },
  password: { type: String, required: true },
  role: {type: String, required: true},
  address: { type: String, default: null },
  bio: { type: String, default: null },
  profileImage: { type: String, default: null },
}, { timestamps: true });

// Hash password before saving
customerSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

module.exports = mongoose.model('customer_info', customerSchema);

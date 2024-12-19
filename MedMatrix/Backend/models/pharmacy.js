const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Pharmacy Schema
const pharmacySchema = new mongoose.Schema({
  pharmacyName: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  role : { type:String, required: true },
  pharmacyAddress: { type: String, required: true },
  registrationCode: { type: String, required: true },
  profilePicture: { type: String },
  createdAt: { type: Date, default: Date.now },
});

// Hash password before saving
pharmacySchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

module.exports = mongoose.model('pharmacy_info', pharmacySchema);

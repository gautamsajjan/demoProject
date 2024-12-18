const mongoose = require('mongoose');

const pharmacySchema = new mongoose.Schema({
  pharmacyName: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  licenseNumber: { type: String, required: true, unique: true, trim: true },
  pharmacyAddress: { type: String, required: true },
  registrationCode: { type: String, required: true },
  profilePicture: { type: String },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Pharmacy', pharmacySchema);

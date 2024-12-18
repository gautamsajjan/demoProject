const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  specialization: {
    type: String,
    required: true,
    enum: [
      'Dermatologist',
      'Cardiologist',
      'Pediatrician',
      'Orthopedic',
      'Ophthalmologist',
      'Neurologist',
      'General Practitioner',
    ],
  },
  phone: {
    type: String,
    required: true,
  },
  experience: {
    type: Number, 
    required: true,
  },
  qualifications: {
    type: [String], 
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  availability: {
    type: [
      {
        day: {
          type: String,
          required: true, 
        },
        startTime: {
          type: String, 
          required: true,
        },
        endTime: {
          type: String, 
          required: true,
        },
      },
    ],
    required: true,
  },
  consultationFee: {
    type: Number,
    required: true,
  },
  profilePicture: {
    type: String, 
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Doctor', doctorSchema);

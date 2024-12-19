const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  dose: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: [
      'pain-relief-medications',
      'cold-&-flu-medications',
      'antibiotics',
      'allergy-medications',
      'digestive-health-products',
      'cardiovascular-medications',
      'diabetes-medications',
      'topical-medications',
      'mental-health-medications',
      'eye-care-medications',
    ],
  },
  image: {
    type: String,
  },
  pharmacyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Pharmacy',
    required: true,
  },
});

module.exports = mongoose.model('Product', productSchema);

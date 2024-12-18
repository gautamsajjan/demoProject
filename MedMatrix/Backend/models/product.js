const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  pharmasictId: { type: mongoose.Schema.Types.ObjectId, ref: 'user_info', required: true },
  image: { type: String }, // Store image path or URL
  name: { type: String, required: true },
  description: { type: String },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: String, required: true },
  dose: { type: String, required: true },
  
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);

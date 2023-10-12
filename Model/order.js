const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
  name: { 
  	type: String, 
  	required: true
  },
  phone: {
    type: String,
    required: true
    },
  address: {
  	type: String
  },
  products: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'products',
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('order', orderSchema);
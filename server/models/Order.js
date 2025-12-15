const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [{
    menuItemId: { type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem' },
    quantity: Number,
    price: Number
  }],
  subtotal: { type: Number, required: true },
  deliveryFee: { type: Number, default: 2.00 },
  tax: { type: Number, required: true },
  total: { type: Number, required: true },
  deliveryAddress: {
    street: String,
    city: String,
    pincode: String
  },
  paymentMethod: { type: String, enum: ['card', 'wallet', 'cod'], required: true },
  status: { type: String, enum: ['pending', 'confirmed', 'preparing', 'delivered'], default: 'pending' }
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);

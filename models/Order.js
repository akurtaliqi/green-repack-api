const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const orderSchema = mongoose.Schema({
  buyerId: { type: String, required: true },
  productId: { type: String, required: true },
  price: { type: Number },
  orderDate: { type: Date, required: true },
  // stateId - pending - 

});

orderSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Order', orderSchema);
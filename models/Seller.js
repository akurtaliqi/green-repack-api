const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const sellerSchema = mongoose.Schema({
  // username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

sellerSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Seller', sellerSchema);
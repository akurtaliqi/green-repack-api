const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const buyerSchema = mongoose.Schema({
  // username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Buyer', buyerSchema);
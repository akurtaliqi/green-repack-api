const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const walletSchema = mongoose.Schema({
  buyerId: { type: String, required: true },
  amount: { type: Number, required: true },
});

walletSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Wallet', walletSchema);
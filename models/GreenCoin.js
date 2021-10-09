const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const greenCoinSchema = mongoose.Schema({
  buyerId: { type: String, required: true },
  associationId: { type: String },
  projectId: { type: String },
  coins: { type: Number },
});

greenCoinSchema.plugin(uniqueValidator);

module.exports = mongoose.model('GreenCoin', greenCoinSchema);
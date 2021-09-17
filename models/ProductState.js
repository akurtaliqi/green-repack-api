const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const productState = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
});

productState.plugin(uniqueValidator);

module.exports = mongoose.model('ProductState', productState);
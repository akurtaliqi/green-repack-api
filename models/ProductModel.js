const mongoose = require('mongoose');

const productModelSchema = mongoose.Schema({
  title: { type: String, required: true },
});

module.exports = mongoose.model('ProdutModel', productModelSchema);
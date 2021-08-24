const mongoose = require('mongoose');

const productCategorySchema = mongoose.Schema({
  title: { type: String, required: true },
});

module.exports = mongoose.model('ProdutCategory', productCategorySchema);
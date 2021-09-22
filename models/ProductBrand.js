const mongoose = require('mongoose');

const productBrandSchema = mongoose.Schema({
    name: { type: String, required: true },
    categoryId: { type: String, required: true },
});

module.exports = mongoose.model('ProductBrand', productBrandSchema);
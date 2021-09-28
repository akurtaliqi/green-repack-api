const mongoose = require('mongoose');

const productModelSchema = mongoose.Schema({
    name: { type: String, required: true },
    // brand: { type: String, required: true },
    price: { type: Number, required: true },
    categoryId: { type: String, required: true },
    // brandId: { type: String, required: true },
});

module.exports = mongoose.model('ProductModel', productModelSchema);
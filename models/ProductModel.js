const mongoose = require('mongoose');

const productModelSchema = mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    price: { type: Number, required: true },
    categoryId: { type: String, required: true },
});

module.exports = mongoose.model('ProductModel', productModelSchema);
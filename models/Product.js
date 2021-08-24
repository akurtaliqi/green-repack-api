const mongoose = require('mongoose');
const ProductCategory = require('./ProductCategory');
const Seller = require('./Seller');
const Warehouse = require('./Warehouse');

const productSchema = mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    brand: { type: String, required: true },
    features: { type: String, required: true },
    state: { type: String, required: true },
    image: { type: binary, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    sellerId: { type: String, required: true },
    category : { type: ProductCategory, required: true },
    warehouse : { type: Warehouse },
});

module.exports = mongoose.model('Product', productSchema);
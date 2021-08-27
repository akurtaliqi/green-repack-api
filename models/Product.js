const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    brand: { type: String, required: true },
    sellerId: { type: String, required: true },
    /*features: { type: String, required: true },
    state: { type: String, required: true },
    img:
    {
        data: Buffer,
        contentType: String
    },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    sellerId: { type: String, required: true },
    // category : { type: ProductCategory, required: true },
    // warehouse : { type: Warehouse },*/
});

module.exports = mongoose.model('Product', productSchema);
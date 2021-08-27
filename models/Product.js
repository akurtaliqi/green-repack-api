const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    brand: { type: String, required: true },
    features: { type: String, required: true },
    state: { type: String, required: true },
    priceOffer: { type: Number },
    // priceSell: { type: Number },
    sellOfferAccept: { type: Boolean, required: true },
    sellerId: { type: String, required: true },
    categoryId: { type: String, required: true },
    warehouseId: { type: String },
    /*
    img:
    {
        data: Buffer,
        contentType: String
    },
    
    stock: { type: Number, required: true },
    */
});

module.exports = mongoose.model('Product', productSchema);
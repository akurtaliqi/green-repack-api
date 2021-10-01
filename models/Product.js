const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    brand: { type: String, required: true },
    features: { type: String, required: true },
    // state: { type: String, required: true },
    createDate: { type: Date, required: true },
    updateDate: { type: Date },
    // sellPrice: { type: Number },
    // priceOffer: { type: Number },
    // sellOfferAccept: { type: Boolean, required: true },
    sent: { type: Boolean, required: true },
    received: { type: Boolean, required: true },
    verified: { type: Boolean, required: true },
    verified: { type: Boolean, required: true },
    sold: { type: String },
    productModelId: { type: String, required: true },
    sellerId: { type: String, required: true },
    categoryId: { type: String, required: true },
    // brandId: { type: String, required: true },
    warehouseId: { type: String },
    images: {
        type: [String],
    },
    // priceSell: { type: Number },
});

module.exports = mongoose.model('Product', productSchema);
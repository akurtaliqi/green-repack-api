const mongoose = require('mongoose');

const sellOfferSchema = mongoose.Schema({
    date: { type: String, required: true },
    price: { type: Number, required: true },
    discount: { type: Number, required: true },
    sellOfferAccept: { type: Boolean, required: true },
    productId: { type: String, required: true },
    createDate: { type: Date, required: true },
    updateDate: { type: Date },
});

module.exports = mongoose.model('SellOffer', sellOfferSchema);
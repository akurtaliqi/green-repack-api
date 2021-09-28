const mongoose = require('mongoose');

const sellOfferSchema = mongoose.Schema({
    price: { type: Number, required: true },
    discount: { type: Number },
    sellOfferAccept: { type: Boolean, required: true },
    productId: { type: String, required: true },
    createDate: { type: Date, required: true },
    sellerId: { type: String, required: true },
    // bon de commande

    // updateDate: { type: Date },
});

module.exports = mongoose.model('SellOffer', sellOfferSchema);
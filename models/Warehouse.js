const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Product = require('./Product');

const warehouseSchema = mongoose.Schema({
    address: { type: String, required: true },
    country: { type: String, required: true },
    products  : [Product],
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Warehouse', warehouseSchema);
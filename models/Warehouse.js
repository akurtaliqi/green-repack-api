const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const warehouseSchema = mongoose.Schema({
    address: { type: String, required: true },
    country: { type: String, required: true },
    // products  : [Product],
});

module.exports = mongoose.model('Warehouse', warehouseSchema);
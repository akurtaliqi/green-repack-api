const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const warehouseSchema = mongoose.Schema({
    addressNumber: { type: String, required: true },
    addressRoad: { type: String, required: true },
    addressPostalCode: { type: String, required: true },
    addressCity: { type: String, required: true },
    country: { type: String, required: true },
    // products  : [Product],
});

module.exports = mongoose.model('Warehouse', warehouseSchema);
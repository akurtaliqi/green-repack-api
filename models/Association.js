const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const associationSchema = mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
  // password: { type: String, required: true },

});

associationSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Association', associationSchema);
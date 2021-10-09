const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const associationProjectSchema = mongoose.Schema({
  // username: { type: String, required: true },
  associationId: { type: String, required: true },
  projectName: { type: String, required: true },
  projectDescription: { type: String, required: true },

  // password: { type: String, required: true },

});

associationProjectSchema.plugin(uniqueValidator);

module.exports = mongoose.model('AssociationProject', associationProjectSchema);
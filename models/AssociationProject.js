const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const associationProjectSchema = mongoose.Schema({
  associationId: { type: String, required: true },
  projectName: { type: String, required: true },
  projectDescription: { type: String, required: true },
  // greencoinsvalue: { type: Number },
});

associationProjectSchema.plugin(uniqueValidator);

module.exports = mongoose.model('AssociationProject', associationProjectSchema);
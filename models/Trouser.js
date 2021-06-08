const mongoose = require('mongoose');

const TrouserSchema = mongoose.Schema({
  name: {
    type: String,
  },
  waist: {
    type: String,
  },
  lap: {
    type: String,
  },
  length: {
    type: String,
  },
  knee: {
    type: String,
  },
  flap: {
    type: String,
  },
  hip: {
    type: String,
  },
  lowerLimb: {
    type: String,
  },
  mouthAnkle: {
    type: String,
  },
});

module.exports = mongoose.model('trousers', TrouserSchema);

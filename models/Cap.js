const mongoose = require('mongoose');

const CapSchema = mongoose.Schema({
  name: {
    type: String,
  },
  cap: {
    type: String,
  },
});

module.exports = mongoose.model('caps', CapSchema);

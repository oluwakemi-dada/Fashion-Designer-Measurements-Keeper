const mongoose = require('mongoose');

const AgbadaSchema = mongoose.Schema({
  name: {
    type: String,
  },
  sleeve: {
    type: String,
  },
  length: {
    type: String,
  },
});

module.exports = mongoose.model('agbada', AgbadaSchema);

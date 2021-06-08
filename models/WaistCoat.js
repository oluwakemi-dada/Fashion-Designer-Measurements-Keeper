const mongoose = require('mongoose');

const WaistCoatSchema = mongoose.Schema({
  name: {
    type: String,
  },
  chest: {
    type: String,
  },
  stomach: {
    type: String,
  },
  length: {
    type: String,
  },
});

module.exports = mongoose.model('waistcoats', WaistCoatSchema);

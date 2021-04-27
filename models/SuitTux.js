const mongoose = require('mongoose');

const SuitTuxSchema = mongoose.Schema({
  name: {
    type: String,
  },
  back: {
    type: String,
  },
  chest: {
    type: String,
  },
  length: {
    type: String,
  },
  roundSleeve: {
    type: String,
  },
  sleeveLength: {
    type: String,
  },
  stomach: {
    type: String,
  },
  cuffWrist: {
    type: String,
  },
  lapel: {
    type: String,
  },
});

module.exports = mongoose.model('suittux', SuitTuxSchema);

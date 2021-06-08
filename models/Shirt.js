const mongoose = require('mongoose');

const ShirtSchema = mongoose.Schema({
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
  shortSleeveLength: {
    type: String,
  },
  stomach: {
    type: String,
  },
  neck: {
    type: String,
  },
  cuffWrist: {
    type: String,
  },
});

module.exports = mongoose.model('shirts', ShirtSchema);

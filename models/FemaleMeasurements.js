const mongoose = require('mongoose');

const FemaleMeasurementsSchema = mongoose.Schema({
  name: {
    type: String,
  },
  shoulder: {
    type: String,
  },
  bust: {
    type: String,
  },
  underBust: {
    type: String,
  },
  shoulderToBust: {
    type: String,
  },
  stomach: {
    type: String,
  },
  neck: {
    type: String,
  },
  sleeveLength: {
    type: String,
  },
  roundSleeve: {
    type: String,
  },
  halfLength: {
    type: String,
  },
  hip: {
    type: String,
  },
  blouseLengthLong: {
    type: String,
  },
  blouseLengthShort: {
    type: String,
  },
  gownLengthLong: {
    type: String,
  },
  gownLengthShort: {
    type: String,
  },
  dressLengthLong: {
    type: String,
  },
  dressLengthShort: {
    type: String,
  },
});

module.exports = mongoose.model('femalemeasurements', FemaleMeasurementsSchema);

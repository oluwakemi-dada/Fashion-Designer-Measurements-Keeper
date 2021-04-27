const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  address: {
    type: String,
  },
  dob: {
    type: String,
  },
  anniversary: {
    type: String,
  },
  royalBrocadeTop: {
    type: mongoose.Schema.Types.Array,
    ref: 'royalbrocadetop',
  },
  trouser: {
    type: mongoose.Schema.Types.Array,
    ref: 'trouser',
  },
  agbada: {
    type: mongoose.Schema.Types.Array,
    ref: 'agbada',
  },
  cap: {
    type: mongoose.Schema.Types.Array,
    ref: 'cap',
  },
  suitTux: {
    type: mongoose.Schema.Types.Array,
    ref: 'suittux',
  },
  waistCoat: {
    type: mongoose.Schema.Types.Array,
    ref: 'waistcoat',
  },
  shirt: {
    type: mongoose.Schema.Types.Array,
    ref: 'shirt',
  },
  femaleMeasurements: {
    type: mongoose.Schema.Types.Array,
    ref: 'femalemeasurements',
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('contact', ContactSchema);

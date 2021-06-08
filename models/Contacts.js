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
  royalBrocadeTops: {
    type: mongoose.Schema.Types.Array,
    ref: 'royalbrocadetop',
  },
  trousers: {
    type: mongoose.Schema.Types.Array,
    ref: 'trouser',
  },
  agbadas: {
    type: mongoose.Schema.Types.Array,
    ref: 'agbada',
  },
  caps: {
    type: mongoose.Schema.Types.Array,
    ref: 'cap',
  },
  suitTuxes: {
    type: mongoose.Schema.Types.Array,
    ref: 'suittux',
  },
  waistCoats: {
    type: mongoose.Schema.Types.Array,
    ref: 'waistcoat',
  },
  shirts: {
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

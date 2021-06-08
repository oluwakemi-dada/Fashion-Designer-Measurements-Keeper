const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { body, validationResult } = require('express-validator');

const User = require('../models/User');
const Contact = require('../models/Contacts');

// @route      GET  api/contacts
// @desc       Get all users contacts
// @access     Private
router.get('/', auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1,
    });

    res.json(contacts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route      POST  api/contacts
// @desc       Add new contact
// @access     Private
router.post(
  '/',
  [
    auth,
    [
      body('name', 'Name is required').not().isEmpty(),
      body('phone', 'Phone is required').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    // Check for errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // If no errors
    const {
      name,
      phone,
      email,
      address,
      dob,
      anniversary,
      royalBrocadeTops,
      trousers,
      agbadas,
      caps,
      suitTuxes,
      waistCoats,
      shirts,
      femaleMeasurements,
    } = req.body;

    try {
      // Create new contact with the fields
      const newContact = new Contact({
        name,
        phone,
        email,
        address,
        dob,
        anniversary,
        royalBrocadeTops,
        trousers,
        agbadas,
        caps,
        suitTuxes,
        waistCoats,
        shirts,
        femaleMeasurements,
        user: req.user.id,
      });

      // Save contact to database
      const contact = await newContact.save();

      // Return contact to the client
      res.json(contact);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route      PUT  api/contacts/:id
// @desc       Update contact
// @access     Public
router.put('/:id', auth, async (req, res) => {
  const {
    name,
    phone,
    email,
    address,
    dob,
    anniversary,
    royalBrocadeTop,
    trouser,
    agbada,
    cap,
    suitTux,
    waistCoat,
    shirt,
    femaleMeasurements,
  } = req.body;

  // build a contact object based on submitted fields
  const contactFields = {};
  if (name) contactFields.name = name;
  if (phone) contactFields.phone = phone;
  if (email) contactFields.email = email;
  if (address) contactFields.address = address;
  if (dob) contactFields.dob = dob;
  if (anniversary) contactFields.anniversary = anniversary;
  if (royalBrocadeTop) contactFields.royalBrocadeTop = royalBrocadeTop;
  if (trouser) contactFields.trouser = trouser;
  if (agbada) contactFields.agbada = agbada;
  if (cap) contactFields.cap = cap;
  if (suitTux) contactFields.suitTux = suitTux;
  if (waistCoat) contactFields.waistCoat = waistCoat;
  if (shirt) contactFields.shirt = shirt;
  if (femaleMeasurements) contactFields.femaleMeasurements = femaleMeasurements;

  try {
    let contact = await Contact.findById(req.params.id);

    if (!contact) return res.status(404).json({ msg: 'Contact not found' });

    // Make sure user owns contact
    if (contact.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not autorized' });
    }

    contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { $set: contactFields },
      { new: true }
    );

    res.json(contact);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route      DELETE  api/contacts/:id
// @desc       Delete contact
// @access     Public
router.delete('/:id', auth, async (req, res) => {
  try {
    let contact = await Contact.findById(req.params.id);

    if (!contact) return res.status(404).json({ msg: 'Contact not found' });

    // Make sure user owns contact
    if (contact.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not autorized' });
    }

    await Contact.findByIdAndRemove(req.params.id);

    res.json({ msg: 'Contact removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;

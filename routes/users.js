const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { body, validationResult } = require('express-validator');

const User = require('../models/User');

// @route      POST  api/users
// @desc       Register a user
// @access     Public
router.post(
  '/',
  [
    body('name', 'Please add name').not().isEmpty(),
    body('email', 'Please include a valid email').isEmail(),
    body(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    const { name, email, password } = req.body;

    try {
      // Check if there's a user with that email
      let user = await User.findOne({ email });
      // If user exists
      if (user) {
        return res.status(400).json({ msg: 'User already exists' });
      }

      // If user doesnt exist, create new user (new instance of user)
      user = new User({ name, email, password });

      // Hash / encrypt the password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      // Save in database
      await user.save();

      // JWT stuffs... Get the user id
      const payload = {
        user: {
          id: user.id,
        },
      };

      // Generate a token
      jwt.sign(payload, config.get('jwtSecret'), {
        expiresIn: 360000
      }, (err, token) => {
        if(err) throw err
        res.json({token})
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;

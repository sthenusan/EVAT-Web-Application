const express = require('express');
const router = express.Router();
const {signup, signin} = require('../controllers/AuthController');

// @route    POST api/auth/signup
// @desc     Register user
// @access   Public
router.post('/signup', signup);

// @route    POST api/auth/signin
// @desc     Authenticate user and get token
// @access   Public
router.post('/signin', signin);

// @route    GET api/helloworld
// @desc     Simple Hello World endpoint
// @access   Public
router.get('/hello', (req, res) => {
    res.send('Hello World');
  });

module.exports = router;

const express = require('express');
const authController = require('../controllers/googleOAuth');

const router = express.Router();

router.post('/google', authController.login);

module.exports = router;

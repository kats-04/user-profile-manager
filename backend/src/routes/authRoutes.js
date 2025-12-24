const express = require('express');
const router = express.Router();
const { registerUser } = require('../controllers/authController');

// This tells the server: "When someone POSTs to /, run the registerUser function"
router.post('/register', registerUser);

module.exports = router;
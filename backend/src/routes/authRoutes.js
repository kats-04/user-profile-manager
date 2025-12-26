const express = require('express');
const router = express.Router();
const { 
    registerUser, 
    loginUser, 
    getUserProfile, 
    updateUserProfile,
    updatePassword 
} = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');

// Public routes
router.post('/register', registerUser);
router.post('/login', loginUser);

// Private routes (Protected by middleware)
router.route('/profile')
    .get(protect, getUserProfile)
    .put(protect, updateUserProfile);

// 2. Add this specific route for password changes
router.put('/change-password', protect, updatePassword);

module.exports = router;
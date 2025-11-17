const express = require('express');
const router = express.Router();
const { registerCustomer, loginCustomer, getMe, updateProfile, changePassword } = require('../controllers/authController');
const { protectCustomer } = require('../middleware/authmiddleware');

// Public routes
router.post('/register', registerCustomer);
router.post('/login', loginCustomer);

// Protected routes
router.get('/me', protectCustomer, getMe);

//update the profile
router.put('/update-profile', protectCustomer, updateProfile);
router.put('/change-password', protectCustomer, changePassword);
module.exports = router;
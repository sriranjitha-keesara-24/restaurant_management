const express = require('express');
const router = express.Router();
const { registerAdmin, loginAdmin, getAdminProfile } = require('../controllers/admin_controllers');
const { protectAdmin } = require('../middleware/authmiddleware');

// Public routes
router.post('/register', registerAdmin);
router.post('/login', loginAdmin);

// Protected routes
router.get('/me', protectAdmin, getAdminProfile);

module.exports = router;
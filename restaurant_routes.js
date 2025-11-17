const express = require('express');
const router = express.Router();
const {
  createRestaurant,
  getAllRestaurants,
  getRestaurant,
  updateRestaurant,
  deleteRestaurant,
  addReview
} = require('../controllers/restaurant_controller');
const { protectCustomer, protectAdmin } = require('../middleware/authmiddleware');

// Public routes
router.get('/', getAllRestaurants);
router.get('/:id', getRestaurant);

// Customer routes
router.post('/:id/reviews', protectCustomer, addReview);

// Admin routes
router.post('/', protectAdmin, createRestaurant);
router.put('/:id', protectAdmin, updateRestaurant);
router.delete('/:id', protectAdmin, deleteRestaurant);

module.exports = router;
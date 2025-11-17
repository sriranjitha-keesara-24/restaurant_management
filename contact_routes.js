const express = require('express');
const router = express.Router();
const {
  createContact,
  getMyContacts,
  getContactsByRestaurant,
  getContact,
  getAllContactsAdmin,
  respondToContact,
  updateContactStatus,
  deleteContact
} = require('../controllers/contact/contact_controller');
const { protectCustomer, protectAdmin } = require('../middleware/authmiddleware');

// Customer routes
router.post('/', protectCustomer, createContact);
router.get('/my-contacts', protectCustomer, getMyContacts);
router.get('/restaurant/:restaurantId', protectCustomer, getContactsByRestaurant);
router.get('/:id', protectCustomer, getContact);

// Admin routes
router.get('/admin/all', protectAdmin, getAllContactsAdmin);
router.put('/:id/respond', protectAdmin, respondToContact);
router.put('/:id/status', protectAdmin, updateContactStatus);
router.delete('/:id', protectAdmin, deleteContact);

module.exports = router;
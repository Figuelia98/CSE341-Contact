const express = require('express');

const getContactController = require('../controllers/contacts');

const router = express.Router();
router.get('/', getContactController.getAllContact);
router.get('/:id', getContactController.getSingleContact);
router.post('/', getContactController.createContact);
router.put('/:id', getContactController.updateContact);
router.delete('/:id', getContactController.deleteContact);
module.exports = router;


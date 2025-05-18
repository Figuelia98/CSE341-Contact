const express = require('express');

const getContactController = require('../controllers/contact');

const router = express.Router();

router.get('/', getContactController.getIndex);
router.get('/allcontact', getContactController.getAllContact);
router.get('/contact/:id', getContactController.getSingleContact);
router.get('/sayhello', getContactController.getHello);

module.exports = router;
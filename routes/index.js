const express = require('express');

const getContactController = require('../controllers/getContact');

const router = express.Router();

router.get('/', getContactController.getData);
module.exports = router;
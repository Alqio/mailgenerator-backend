const express = require('express');
const mailController = require('../controllers/mailController');

const router = express.Router();

router.get('/:id', mailController.getMails);
router.post('/', mailController.createMail);

module.exports = router;

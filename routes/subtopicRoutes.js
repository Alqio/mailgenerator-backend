const express = require('express');
const subtopicController = require('../controllers/subtopicController');

const router = express.Router();

router.get('/', subtopicController.getSubtopics);
router.post('/', subtopicController.addSubtopic);

module.exports = router;

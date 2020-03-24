const express = require('express');
const db = require('../db/index');
const topicService = require('../services/topicService');
const topicController = require('../controllers/topicController');

const router = express.Router();

router.get('/', topicController.getAllTopics);
router.post('/', topicController.addTopic);
router.delete('/:number', topicController.deleteTopic);

module.exports = router;

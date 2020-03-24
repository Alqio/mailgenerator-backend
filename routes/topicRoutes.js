const express = require('express');
const topicController = require('../controllers/topicController');

const router = express.Router();

router.get('/', topicController.getTopics);
router.post('/', topicController.addTopic);
router.delete('/:number', topicController.deleteTopic);

module.exports = router;

const express = require('express');
const mailController = require('../controllers/mailController');
const subtopicController = require('../controllers/subtopicController');
const topicController = require('../controllers/topicController');

const router = express.Router();

router.post(  '/mail/', mailController.createMail);
router.get(   '/mail/:mailId?', mailController.getMails);

router.post(  '/mail/:mailId/topic/', topicController.addTopic);
router.get(   '/mail/:mailId/topic/:topicId?', topicController.getTopics);
router.delete('/mail/:mailId/topic/:topicId', topicController.deleteTopic);

router.post(  '/mail/:mailId/topic/:topicId/subtopic/', subtopicController.addSubtopic);
router.get(   '/mail/:mailId/topic/:topicId/subtopic/:subtopicId?', subtopicController.getSubtopics);

module.exports = router;

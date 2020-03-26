const express = require('express');
const mailController = require('../controllers/mailController');
const subtopicController = require('../controllers/subtopicController');
const topicController = require('../controllers/topicController');

const router = express.Router();

router.post(  '/mail/', mailController.createMail);
router.get(   '/mail/', mailController.getMails);
router.get(   '/mail/:mailId', mailController.getMail);


router.post(  '/mail/:mailId/topic/', topicController.addTopic);
router.get(   '/mail/:mailId/topic/', topicController.getTopics);
router.get(   '/mail/:mailId/topic/:topicId', topicController.getTopic);
router.delete('/mail/:mailId/topic/:topicId', topicController.deleteTopic);

router.post(  '/mail/:mailId/topic/:topicId/subtopic/', subtopicController.addSubtopic);
router.get(   '/mail/:mailId/topic/:topicId/subtopic/', subtopicController.getSubtopics);
router.get(   '/mail/:mailId/topic/:topicId/subtopic/:subtopicId', subtopicController.getSubtopic);


module.exports = router;

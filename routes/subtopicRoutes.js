const express = require('express');
const db = require('../db/index');
const subtopicService = require('../services/subtopicService');

const router = express.Router();

// define the home page route
router.get('/', async (req, res) => {
    const body = req.body;
    console.log("body: ", body);
    const topicName = (body["topic"] ? body["topic"] : "");
    console.log("here");
    const subtopics = await subtopicService.getAllSubtopics(topicName);
    res.send(subtopics);
});

router.post('/', async (req, res) => {
    const body = req.body;
    const subtopicData = {...body};
    const subtopic = await subtopicService.addSubtopic(subtopicData);

    res.send(subtopic);
});

module.exports = router;

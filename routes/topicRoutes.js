const express = require('express');
const db = require('../db/index');
const topicService = require('../services/topicService');

const router = express.Router();

// define the home page route
router.get('/', async (req, res) => {
    const topics = await topicService.getAllTopics();
    res.send(topics);
});

router.post('/', async (req, res) => {
    const body = req.body;
    const topicData = {name: body.name, number: body.number};
    const topic = await topicService.addTopic(topicData);

    if (topic.error) {
        res.status(409).send(topic);
    } else {
        res.send(topic);
    }
});

router.delete('/:number', async (req, res) => {
    const number = req.params.number;

    const topics = await topicService.deleteTopic(number);

    res.send(topics);

});


module.exports = router;

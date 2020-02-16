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

    res.send(topic);
});

router.delete('/:number', async (req, res) => {
    const number = req.params.number;

    const topics = await topicService.deleteTopic(number);

    res.send(topics);

});

// define the about route
router.get('/about', function (req, res) {
    res.send('About birds')
});

module.exports = router;

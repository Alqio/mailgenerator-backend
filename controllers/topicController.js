const mongoose = require('mongoose');
const db = require('../db/index');

const Topic = mongoose.model('topic');

const getTopics = async (req, res) => {

    const name = req.body.name;

    const conn = await db.connect();
    const all = await Topic.getTopics(name);
    conn.close();

    res.send(all);
};

const addTopic = async (req, res) => {
    const body = req.body;
    const topicData = {name: body.name, number: body.number};

    const conn = await db.connect();
    const ret = await Topic.createTopic(topicData);
    conn.close();

    res.send(ret);
};

const deleteTopic = async (req, res) => {
    const number = req.params.number;

    const conn = await db.connect();
    const topics = await Topic.deleteTopic(number);
    conn.close();

    res.send(topics);
};

module.exports = {
    getTopics,
    addTopic,
    deleteTopic
};
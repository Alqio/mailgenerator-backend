const mongoose = require('mongoose');
const db = require('../db/index');

const Topic = mongoose.model('topic');
const Mail = mongoose.model('mail');

const getTopics = async (req, res) => {
    const topic = req.params.topicId;
    const mail = req.params.mailId;

    let topics;

    const conn = await db.connect();
    if (!topic) {
        topics = await Mail.getAllTopics(mail);
    } else {
        topics = await Topic.getTopic(mail, topic);
    }
    conn.close();

    res.send(topics);
};

const addTopic = async (req, res) => {
    const body = req.body;
    const mail = req.params.mailId;

    const topicData = {
        name: body.name,
        number: body.number,
        mail
    };

    const conn = await db.connect();
    const ret = await Topic.createTopic(topicData);
    conn.close();

    res.send(ret);
};

const deleteTopic = async (req, res) => {
    const number = req.params.topicId;

    const conn = await db.connect();
    const topics = await Topic.deleteTopic(topicId);
    conn.close();

    res.send(topics);
};

module.exports = {
    getTopics,
    addTopic,
    deleteTopic
};
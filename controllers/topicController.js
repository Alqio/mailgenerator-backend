const mongoose = require('mongoose');
const db = require('../db/index');

const Topic = mongoose.model('topic');
const Mail = mongoose.model('mail');

const getTopics = async (req, res) => {
    const mail = req.params.mailId;

    const conn = await db.connect();
    const topics = await Mail.getAllTopicsInMail(mail);
    conn.close();

    res.send(topics);
};

const getTopic = async (req, res) => {
    const topicId = req.params.topicId;
    const mailId = req.params.mailId;

    const conn = await db.connect();
    const topic = await Topic.getTopic(mailId, topicId);
    conn.close();

    res.send(topic);

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
    const ret = await Topic.createTopic(mail, topicData);
    conn.close();

    res.send(ret);
};

const deleteTopic = async (req, res) => {
    const topicId = req.params.topicId;

    const conn = await db.connect();
    const topics = await Topic.deleteTopic(topicId);
    conn.close();

    res.send(topics);
};

module.exports = {
    getTopics,
    addTopic,
    deleteTopic,
    getTopic
};
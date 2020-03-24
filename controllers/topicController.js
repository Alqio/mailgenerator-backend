const schemas = require('../db/schemas');
const mongoose = require('mongoose');
const db = require('../db/index');

const Topic = schemas.topic;

const getAllTopics = async (req, res) => {
    const conn = await db.connect();
    const all = await Topic.getAllTopics();
    conn.close();

    res.send(all);
};

const addTopic = async (req, res) => {
    const body = req.body;
    const topicData = {name: body.name, number: body.number};

    const conn = db.connect();
    const ret = Topic.createTopic(topicData);
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
    getAllTopics,
    addTopic,
    deleteTopic
};
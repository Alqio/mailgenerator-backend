const mongoose = require('mongoose');
const db = require('../db/index');

const Subtopic = mongoose.model('subtopic');

const getSubtopics = async (req, res) => {

    const body = req.body;

    const topicName = (body["topic"] ? body["topic"] : "");

    const conn = await db.connect();
    const subtopics = Subtopic.getSubtopics(topicName);
    conn.close();

    res.send(subtopics);
};

const addSubtopic = async (req, res) => {
    const body = req.body;
    const subtopicData = {...body};

    const conn = await db.connect();
    const ret = await Subtopic.createSubtopic(subtopicData);
    conn.close();

    res.send(ret);
};

module.exports = {
    getSubtopics,
    addSubtopic,
};
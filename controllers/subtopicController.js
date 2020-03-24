const mongoose = require('mongoose');
const db = require('../db/index');

const Subtopic = mongoose.model('subtopic');
const Topic = mongoose.model('topic');

const getSubtopics = async (req, res) => {
    const topic = req.params.topicId;
    const subtopic = req.params.subtopicId;

    let subtopics;

    const conn = await db.connect();

    if (subtopic) {
        subtopics = Subtopic.getSubtopic(subtopic);
    } else {
        subtopics = await Topic.getAllSubtopics(topic)
    }
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
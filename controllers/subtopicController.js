const schemas = require('../db/schemas');
const mongoose = require('mongoose');
const db = require('../db/index');

const topicModel = mongoose.model('topic', schemas['topic']);
const subtopicModel = mongoose.model('subtopic', schemas['subtopic']);

const removeProperty = (subtopic, property) => {

    const {
        [property]: _,
        ...result
    } = subtopic;

    return result;
};

const getSubtopics = async (req, res) => {

    const body = req.body;

    const topicName = (body["topic"] ? body["topic"] : "");

    let all;

    const conn = await db.connect();

    if (topicName !== "") {
        all = await subtopicModel.find({topic: topicName});
    } else {
        all = await subtopicModel.find();
    }

    const tidied = all.map(subtopic => {
        return subtopic;//removeProperty(subtopic, "__v");//removeProperty(, "_id");
    });

    console.log(tidied);

    conn.close();

    res.send(all);
};

const addSubtopic = async (req, res) => {
    const body = req.body;
    const subtopicData = {...body};

    const subtopic = new subtopicModel(subtopicData);

    const conn = await db.connect();
    const ret = await subtopic.save();
    conn.close();

    res.send(ret);
};

module.exports = {
    getSubtopics,
    addSubtopic,
    subtopicModel
};
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

const getAllSubtopics = async (topicName) => {
    const conn = await db.connect();

    let all;

    if (topicName !== "") {
        all = await subtopicModel.find({topic: topicName});
    } else {
        all = await subtopicModel.find();
    }

    const tidied = all.map(subtopic => {
        return all;//removeProperty(subtopic, "__v");//removeProperty(, "_id");
    });

    console.log(tidied);

    conn.close();

    return all;
};

const addSubtopic = async (subtopicData) => {
    const subtopic = new subtopicModel(subtopicData);
    console.log("here, subtopicData:", subtopicData);

    const conn = await db.connect();
    const ret = await subtopic.save();
    conn.close();

    return ret;
};

module.exports = {
    getAllSubtopics,
    addSubtopic,
    subtopicModel
};
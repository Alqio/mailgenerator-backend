const schemas = require('../db/schemas');
const mongoose = require('mongoose');
const db = require('../db/index');

const topicModel = mongoose.model('topic', schemas['topic']);


const getAllTopics = async () => {
    const conn = await db.connect();

    const all = await topicModel.find();
    console.log(all);

    conn.close();

    return all;
};

const addTopic = async (topicData) => {
    const topic = new topicModel(topicData);

    const conn = await db.connect();
    const ret = await topic.save();
    conn.close();

    return ret;
};

module.exports = {
    getAllTopics,
    addTopic
};
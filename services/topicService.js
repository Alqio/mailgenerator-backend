const schemas = require('../db/schemas');
const mongoose = require('mongoose');
const db = require('../db/index');
const subtopicService = require('./subtopicService');

const topicModel = mongoose.model('topic', schemas['topic']);


const getAllTopics = async () => {
    const conn = await db.connect();

    const all = await topicModel.find();
    console.log(all);

    conn.close();

    return all;
};

const addTopic = async (topicData) => {
    const number = topicData.number;
    const name = topicData.name;
    const topics = await getAllTopics();

    for (let i = 0; i < topics.length; i++) {
        if (topics[i].number === number) {
            return {
                error: "Number already exists",
                code: 409
            };
        } else if (topics[i] === name) {
            return {
                error: "Name already exists",
                code: 409
            }
        }
    }

    const topic = new topicModel(topicData);

    const conn = await db.connect();
    const ret = await topic.save();
    conn.close();

    return ret;
};

const deleteTopic = async (number) => {
    const conn = await db.connect();

    const topics = await topicModel.find({number: number});

    for (let i = 0; i < topics.length; i++) {
        await subtopicService.subtopicModel.deleteMany({topic: topics[i].name})
    }

    await topicModel.deleteMany({number: number});

    conn.close();

    return topics;
};

module.exports = {
    getAllTopics,
    addTopic,
    deleteTopic
};
const mongoose = require('mongoose');
const subtopic = require('./subtopic');

const topic = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Topic needs a name"]
    },
    number: {
        type: Number,
        required: [true, "Topic needs a number"]
    },
    mail: {
        type: String, //mail id
        required: [true, "Topic needs to belong to a mail"]
    }
});

topic.statics.deleteTopic = async function(number) {
    const topics = await this.find({number: number});

    for (let i = 0; i < topics.length; i++) {
        await subtopic.deleteMany({topic: topics[i].name})
    }

    await this.deleteMany({number: number});

    return topics;
};

topic.statics.getTopics = async function(mail, name) {
    return await this.find();
};

topic.statics.getSubtopics = async function(topicName) {

};

topic.statics.createTopic = async function(topicData) {
    const number = Number(topicData.number);
    const name = topicData.name;
    const topics = await this.getAllTopics();

    for (let i = 0; i < topics.length; i++) {
        if (topics[i].number === number) {
            return {
                error: "Number already exists",
                code: 409
            };
        }
        if (topics[i].name === name) {
            return {
                error: "Name already exists",
                code: 409
            }
        }
    }

    console.log(topicData);
    const topic = new this(topicData);

    return await topic.save();

};


module.exports = mongoose.model('topic', topic);
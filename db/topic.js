const mongoose = require('mongoose');

const Subtopic = require('./subtopic');
const Mail = require('./mail');

//const Subtopic = mongoose.model('subtopic');
//const Mail = mongoose.model('mail');

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

topic.statics.deleteTopic = async function(id) {
    const topic = await this.findById(id);

    await Subtopic.deleteMany({topic: id});

    await this.deleteOne({_id, id});

    return topic;
};

topic.statics.getTopic = async function(mail, topicId) {
    return await this.find({mail, _id: topicId});
};

topic.statics.getAllTopics = async function() {
    return await this.find();
};

topic.statics.getAllSubtopics = async function(topicId) {
    const allSubtopics = await Subtopic.getAllTopics();
    return allSubtopics.filter(subtopic => subtopic.topic === topicId);
};

topic.statics.createTopic = async function(mail, topicData) {
    const number = Number(topicData.number);
    const name = topicData.name;

    //find all topics in this mail to see if there are duplicates
    const topics = await Mail.getAllTopics(mail);

    for (let i = 0; i < topics.length; i++) {
        if (topics[i].number === number) {
            return {
                error: "Number already exists in this mail",
                code: 409
            };
        }
        if (topics[i].name === name) {
            return {
                error: "Name already exists in this mail",
                code: 409
            }
        }
    }

    console.log(topicData);
    const topic = new this(topicData);

    return await topic.save();

};


module.exports = mongoose.model('topic', topic);
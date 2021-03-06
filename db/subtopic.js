const mongoose = require('mongoose');


const subtopic = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Subtopic needs a name"]
    },
    text: {
        type: String,
        required: false
    },
    date: {
        type: String,
        required: false
    },
    url: {
        type: String,
        required: false
    },
    picture: {
        type: String,
        required: false
    },
    registration: {
        type: Boolean,
        required: true
    },
    registrationStart: {
        type: String,
        required: false
    },
    registrationEnd: {
        type: String,
        required: false
    },
    topic: {
        type: String,
        required: true
    }
});

subtopic.statics.getSubtopic = async function(id) {
    return await this.findById(id);
};


subtopic.statics.getAllSubtopics = async function() {
    return await this.find();
};

subtopic.statics.createSubtopic = async function(subtopicData) {
    const subtopic = new this(subtopicData);
    return await subtopic.save();
};


module.exports = mongoose.model('subtopic', subtopic);
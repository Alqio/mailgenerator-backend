const mongoose = require('mongoose');
const moment = require('moment');

const mail = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Mail needs a name"]
    }
});

const topic = new mongoose.Schema({
    name: {
      type: String,
      required: [true, "Topic needs a name"]
    },
    number: {
        type: Number,
        required: [true, "Topic needs a number"]
    },
});

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



module.exports = {
    mail,
    topic,
    subtopic
};
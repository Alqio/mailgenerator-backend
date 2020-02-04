const mongoose = require('mongoose');
const moment = require('moment');

const topic = new mongoose.Schema({
    name: {
      type: String,
      required: [true, "Topic needs a name"]
    },
    number: {
        type: Number,
        required: [true, "Topic needs a number"]
    }
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
        type: Number,
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
        type: Number,
        required: false
    },
    registrationEnd: {
        type: Number,
        required: false
    },
    topic: {
        type: String,
        required: true
    }
});



module.exports = {
    topic,
    subtopic
};
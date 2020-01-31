const mongoose = require('mongoose');

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

module.exports = {
    "topic": topic
};
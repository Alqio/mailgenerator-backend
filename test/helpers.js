const mongoose = require('mongoose');

const db = require('../db/index');

//const Topic = mongoose.model('topic');
//const Mail = mongoose.model('mail');
//const Subtopic = mongoose.model('subtopic');

const clearDatabase = async () => {
    const conn = await db.connect();
    await mongoose.model('topic').deleteMany({}, function(err) {
    });
    await mongoose.model('mail').deleteMany({}, function(err) {
    });
    await mongoose.model('subtopic').deleteMany({}, function(err) {
    });
    await conn.close();
};

const mockTopic = {
    name: "topic 1",
    mail: "mailID",
    number: 2
};

const mockMail = {
    name: "mail 1"
};

const mockSubtopic = {
    name: "subtopic 1",
    topic: "topicID",
    registration: false
};

const initDatabase = () => {

};

module.exports = {
    clearDatabase,
    mockMail,
    mockSubtopic,
    mockTopic
};
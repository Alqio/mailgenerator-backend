const mongoose = require('mongoose');



const mail = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Mail needs a name"]
    }
});

mail.statics.getMail = async function(id) {
    return await this.findById(id);
};

mail.statics.getAllMails = async function() {
    return await this.find();
};

mail.statics.createMail = async function(mailData) {
    const name = mailData.name;

    const mail = new this({
        name
    });

    return await mail.save();
};

mail.statics.getAllTopicsInMail = async function(mailId) {
    const allTopics = await Topic.getAllTopics();
    return allTopics.filter(topic => topic.mail === mailId);
};

module.exports = mongoose.model('mail', mail);

const Topic = require('./topic');
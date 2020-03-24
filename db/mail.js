const mongoose = require('mongoose');

const Topic = mongoose.model('topic');

const mail = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Mail needs a name"]
    },
    id: {
        type: String,
        required: [true, "Mail needs an id"]
    }
});

mail.statics.getMail = async function(id) {
    return await this.find({id});
};

mail.statics.getAllMails = async function() {
    return await this.find();
};

mail.statics.createMail = async function(mailData) {
    const name = mailData.name;
    const id = mongoose.Types.ObjectId();

    const mail = new this({
        name,
        id
    });

    return await mail.save();
};

mail.statics.getAllTopics = async function(mailId) {
    const allTopics = await Topic.getAllTopics();
    return allTopics.filter(topic => topic.mail === mailId);
};

module.exports = mongoose.model('mail', mail);
const schemas = require('../db/schemas');
const mongoose = require('mongoose');
const db = require('../db/index');
const subtopicService = require('./subtopicService');

const topicModel = mongoose.model('topic', schemas['topic']);
const mailModel = mongoose.model('mail', schemas['mail']);


const getMails = async (req, res) => {
    const id = req.params.id;

    let mails;

    const conn = await db.connect();
    if (id) {
        mails = await mailModel.find({id});
    } else {
        mails = await mailModel.find();
    }
    conn.close();

    res.send(mails);
};

const addMail = async (req, res) => {

    const mail = new mailModel(mailData);

    const conn = await db.connect();
    const ret = await mail.save();
    conn.close();

    return ret;
};

module.exports = {
    getMails,
    addMail
};
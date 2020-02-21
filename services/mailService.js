const schemas = require('../db/schemas');
const mongoose = require('mongoose');
const db = require('../db/index');
const subtopicService = require('./subtopicService');

const topicModel = mongoose.model('topic', schemas['topic']);
const mailModel = mongoose.model('mail', schemas['mail']);


const getMail = async (id) => {
    const conn = await db.connect();

    const mail = await mailModel.find({id});

    conn.close();

    return mail;
};

const getAllMails = async () => {
    const conn = await db.connect();

    const mails = await mailModel.find();

    conn.close();

    return mails;
};

const addMail = async (mailData) => {

    const mail = new mailModel(mailData);

    const conn = await db.connect();
    const ret = await mail.save();
    conn.close();

    return ret;
};

module.exports = {
    getMail,
    getAllMails,
    addMail
};
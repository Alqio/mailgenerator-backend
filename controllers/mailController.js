const mongoose = require('mongoose');
const db = require('../db/index');

const Mail = mongoose.model('mail');

const getMails = async (req, res) => {
    const conn = await db.connect();
    const mails = await Mail.getAllMails();
    conn.close();

    res.send(mails);
};

const getMail = async (req, res) => {
    const id = req.params.mailId;

    const conn = await db.connect();
    const mail = await Mail.getMail(id);
    conn.close();

    res.send(mail);
};

const createMail = async (req, res) => {
    const mailData = {
        name: req.body.name
    };

    const conn = await db.connect();
    const ret = await Mail.createMail(mailData);
    conn.close();

    res.send(ret);
};

module.exports = {
    getMails,
    createMail,
    getMail
};
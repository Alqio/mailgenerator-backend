const mongoose = require('mongoose');
const db = require('../db/index');

const Mail = mongoose.model('mail');

const getMails = async (req, res) => {
    const id = req.params.id;

    const conn = await db.connect();
    let mails;
    if (id) {
        mails = Mail.getMail(id);
    } else {
        mails = Mail.getAllMails();
    }
    conn.close();

    res.send(mails);
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
    createMail
};
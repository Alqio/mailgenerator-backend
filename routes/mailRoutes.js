const express = require('express');
const db = require('../db/index');
const mailService = require('../services/mailService');
const topicService = require('../services/topicService');

const router = express.Router();

// define the home page route
router.get('/:id', async (req, res) => {
    const id = req.params.id;

    let mails;
    if (id) {
        mails = await mailService.getMail();
    } else {
        mails = await mailService.getAllMails();
    }

    res.send(mails);
});

router.post('/', async (req, res) => {
    const body = req.body;
    const mailData = {name: body.name};
    const mail = await mailService.addMail(mailData);
    res.send(mail);
});

router.delete('/:number', async (req, res) => {
    const number = req.params.number;

    const topics = await topicService.deleteTopic(number);

    res.send(topics);

});


module.exports = router;

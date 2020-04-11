const chai = require('chai');
const chaiHttp = require('chai-http');

const expect = chai.expect;

const app = require('../index');

const helpers = require('./helpers');

chai.use(chaiHttp);
chai.should();

before(async () => {
    return await helpers.clearDatabase();
});

describe("Creating a mail, adding topics and subtopics", () => {

    let mail, topic, subtopic;

    describe("Creating a mail", () => {
        it("/POST should create a new mail", async () => {
            const mailData = {
                ...helpers.mockMail
            };

            const res = await chai.request(app).post('/mail').send(mailData);
            expect(res.status).to.equal(200);
            res.should.have.status(200);
            res.body.should.be.a('object');
            mail = res.body;
        });

        it("/GET should get newly created mail", async () => {

            const res = await chai.request(app).get('/mail/' + mail._id);

            expect(res.status).to.equal(200);
            res.body.should.be.a('object');
            expect(res.body.name).to.equal(helpers.mockMail.name);

        });
    });

    describe("Creating a topic", () => {
        it("/POST should create a new topic", async () => {
            const topicData = {
                ...helpers.mockTopic
            };

            const res = await chai.request(app).post('/mail/' + mail._id + "/topic/").send(topicData);
            expect(res.status).to.equal(200);
            res.body.should.be.a('object');
            expect(res.body.name).to.equal(helpers.mockTopic.name);
            expect(res.body.number).to.equal(helpers.mockTopic.number);
            expect(res.body.mail).to.equal(mail._id);
            topic = res.body;

        });
        it("/GET should return the newly created topic", async () => {
            const res = await chai.request(app).get('/mail/' + mail._id + "/topic/" + topic._id);
            expect(res.status).to.equal(200);
            res.body.should.be.a('object');
            expect(res.body.name).to.equal(helpers.mockTopic.name);
            expect(res.body.number).to.equal(helpers.mockTopic.number);
            expect(res.body.mail).to.equal(mail._id);
        });
    });

    describe("Creating a subtopic", () => {
        it("/POST should create a new subtopic", async () => {
            const subtopicData = {
                ...helpers.mockSubtopic,
                topic: topic._id
            };

            const res = await chai.request(app).post('/mail/' + mail._id + "/topic/" + topic._id + "/subtopic").send(subtopicData);
            expect(res.status).to.equal(200);
            res.body.should.be.a('object');
            expect(res.body.name).to.equal(helpers.mockSubtopic.name);
            expect(res.body.registration).to.equal(helpers.mockSubtopic.registration);
            expect(res.body.topic).to.equal(topic._id);

            subtopic = res.body;

        });
        it("/GET should return the newly created subtopic", async () => {
            const res = await chai.request(app).get('/mail/' + mail._id + "/topic/" + topic._id + "/subtopic/" + subtopic._id);
            expect(res.status).to.equal(200);
            res.body.should.be.a('object');
            expect(res.body.name).to.equal(helpers.mockSubtopic.name);
            expect(res.body.registration).to.equal(helpers.mockSubtopic.registration);
            expect(res.body.topic).to.equal(topic._id);
        });
    });

});

after(async () => {
    return await helpers.clearDatabase();
});
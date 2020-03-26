/*const chai = require('chai');
const chaiHttp = require('chai-http');

const expect = chai.expect;

const app = require('../index');

const helpers = require('./helpers');

chai.use(chaiHttp);
chai.should();


describe("Mail", () => {

    before(async () => {
        return await helpers.clearDatabase();
    });

    describe("Creating and getting mails should work", () => {
        it("/GET should return empty list when there are no mails", async () => {

            const res = await chai.request(app).get('/mail');

            expect(res.status).to.equal(200);
            res.body.should.be.a('array');
            expect(res.body.length).to.equal(0);

        });
        it("/POST should create a new mail", async () => {
            const mailData = {
                ...helpers.mockMail
            };

            const res = await chai.request(app).post('/mail').send(mailData);
            expect(res.status).to.equal(200);
            res.should.have.status(200);
            res.body.should.be.a('object');
        });
        it("/GET should get newly created mail", async () => {

            const res = await chai.request(app).get('/mail');

            expect(res.status).to.equal(200);
            res.should.have.status(200);
            res.body.should.be.a('array');
            expect(res.body.length).to.equal(1);
            expect(res.body[0].name).to.equal("mail 1");

        });
    });

    after(async () => {
        return await helpers.clearDatabase();
    })
});*/
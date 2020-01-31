const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./db/index');
const topicRoutes = require('./routes/topicRoutes');

const config = {
    name: 'mailgenerator-express',
    port: 3001,
    host: '0.0.0.0',
};

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/topic', topicRoutes);

app.get('/', (req, res) => {
    db.create('topic', {
        name: 'Kilta',
        number: 1
    }, (instance) => {
        console.log("added instance:", instance);
        res.status(200).send(instance);
    });

});

app.listen(config.port, config.host, (e)=> {
    if(e) {
        throw new Error('Internal Server Error');
    }
    console.log(`${config.name} running on ${config.host}:${config.port}`);
});
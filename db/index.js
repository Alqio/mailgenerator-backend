const mongoose = require('mongoose');
const dbConfig = require('../config/database');
const schemas = require('./schemas');

const connect = async () => {
    await mongoose.connect(dbConfig.url, {useNewUrlParser: true});

    const conn = mongoose.connection;
    conn.on('error', console.error.bind(console, 'connection error:'));
    return conn;
};

const create = (modelName, data, successCallback) => {
    const model = mongoose.model(modelName, schemas[modelName]);

    const instance = new model(data);

    console.log(instance);

    instance.save((error) => {
        if (error) {
            console.log(error);
        } else {
            successCallback(instance);
        }
    })

};

const findAll = (modelName, callback) => {
    const model = mongoose.model(modelName, schemas[modelName]);
    const db = connect();

    db.once('open', function () {
        mongoose.connection.close();
    });

};

module.exports = {
    create,
    connect
};
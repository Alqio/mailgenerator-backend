const mongoose = require('mongoose');
const dbConfig = require('../config/database');

const connect = async () => {
    await mongoose.connect(dbConfig.url, {useNewUrlParser: true});
    const conn = mongoose.connection;
    conn.on('error', console.error.bind(console, 'connection error:'));
    return conn;
};

module.exports = {
    connect
};
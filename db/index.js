const mongoose = require('mongoose');
const dbConfig = require('../config/database');

mongoose.connect(dbConfig.url, {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("connected to database!");
    mongoose.connection.close();
});
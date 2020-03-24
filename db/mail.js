const mongoose = require('mongoose');

const mail = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Mail needs a name"]
    }
});

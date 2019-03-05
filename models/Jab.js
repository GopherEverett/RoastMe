const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Jab = new Schema ({
    content: String,
    createdOn: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Jab', Jab)

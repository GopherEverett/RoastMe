const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Jab = new Schema ({
    content: String,
    author: {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
});

module.exports = mongoose.model('Jab', Jab)

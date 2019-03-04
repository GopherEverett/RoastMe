const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

const User = new Schema ({
    userName: String,
    email: String,
    password: String,
    imgLink: String,
    roasts: [{
        type: Schema.Types.ObjectId,
      ref: "Roast"
    }]
})

module.exports = mongoose.model('User', User)
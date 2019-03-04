const mongoose = require("./connection.js");
const User = require("../models/User.js");
const Roast = require("../models/Roast.js");
const Jab = require("../models/Jab.js")


const nick = new User({
    userName: 'Nick Cage',
    email: "nickcage@test.com",
    password: "wuierhfkuwy",
    imgLink: 'https://www.placecage.com/gif/200/300',
    roasts: []
})

User.deleteMany({})
    .then(() => User.create())
    .then(() => nick.save())
    // .then(() => roastOne.save())
    .then(() => console.log('nick'))
    .then(() => mongoose.connection.close())
    .catch(err => console.log(err, "error!"))

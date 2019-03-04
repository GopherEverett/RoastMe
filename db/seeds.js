const mongoose = require("./connection.js");
const User = require("../models/User.js");

const nick = new User({
    userName: 'Nick Cage',
    email: "nickcage@test.com",
    password: "wuierhfkuwy",
    imgLink: 'https://www.placecage.com/gif/200/300',
    Roasts: []
})

User.deleteMany({})
    .then(() => User.create())
    .then(() => nick.save())
    .then(() => console.log('nick'))
    .then(() => mongoose.connection.close())
    .catch(err => console.log(err, "error!"))

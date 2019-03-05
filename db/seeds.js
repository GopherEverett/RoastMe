const mongoose = require("./connection.js");
const User = require("../models/User.js");
const Roast = require("../models/Roast.js");
const Jab = require("../models/Jab.js")

const firstJab = new Jab({
    content: "Your Mother is crazy"
})
Jab.deleteMany({})
    .then(() => Jab.create())
    .then(() => firstJab.save())

const firstRoast = new Roast({
    content: "you are crazy",   
})

Roast.deleteMany({})
    .then(() => Roast.create())
    .then(() => firstRoast.save())

const nick = new User({
    userName: 'Nick Cage',
    email: "nickcage@test.com",
    password: "wuierhfkuwy",
    imgLink: 'https://www.placecage.com/200/300',
    roasts: []
})

User.deleteMany({})
    .then(() => User.create())
    .then(() => nick.save())
    // .then(() => roastOne.save())
    .then(() => console.log('nick'))
    .then(() => mongoose.connection.close())
    .catch(err => console.log(err, "error!"))

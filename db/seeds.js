const mongoose = require("./connection.js");
const User = require("../models/User.js");
const  Roast = require("../models/Roast.js");
const Jab = require("../models/Jab.js")


User.deleteMany()
  .then(() => {
    return Roast.deleteMany()
  })
  .then(() => {
    return User.create({
      userName: 'Nick Cage',
      email: "nickcage@test.com",
      password: "wuierhfkuwy",
      imgLink: 'https://www.placecage.com/200/300',
    })
  })
  .then(nick => {
    const roast1Promise = Roast.create({
      content: "You are bananas",
      author: nick._id
    }).then(roast => {
      nick.roasts.push(roast)
    })
    const roast2Promise = Roast.create({
        content: "Your hair is going.",
        author: nick._id
      }).then(roast => {
        nick.roasts.push(roast)
        console.log(roast)
        const jabTest = Jab.create({
            content: "This is a jab"
        }).then((jab) => {
            roast.jabs.push(jab)
            roast.save()
        })
    })
    

    return Promise.all([roast1Promise, roast2Promise]).then(() => {
        nick.save()
      })
    })

    
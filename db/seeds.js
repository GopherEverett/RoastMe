const User = require("../models/User.js");
const Roast = require("../models/Roast.js");
const Jab = require("../models/Jab.js")


User.deleteMany()
    .then(() => {
        return Roast.deleteMany()
    })
    .then(() => {
        return Jab.deleteMany()
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
            content: "You look like the lovechild of Nick Cage and Nick Cage.",
            author: nick._id
        }).then(roast => {
            nick.roasts.push(roast)
        })
        const roast2Promise = Roast.create({
            content: "I am just glad he was never in the Godfather. -Francis Ford Coppola",
            author: nick._id
        }).then(roast => {
            nick.roasts.push(roast)
            const jabTest = Jab.create({
                content: "Even his uncle knows he sucks."
            }).then((jab) => {
                roast.jabs.push(jab)
                roast.save()
            })
        })
        return Promise.all([roast1Promise, roast2Promise]).then(() => {
            nick.save()
        })
    })


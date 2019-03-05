const User = require('../models/User')
const Roast = require('../models/Roast')
const Jabs = require('../models/Jab')


const roastController = {
    index: (req, res) => {
        res.send('Index Page  for roasts')
    },
    new: (req, res) => {
        res.render('roasts/new', { userId: req.params.userId })
    },
    create: (req, res) => {
        User.findById(req.params.userId)
            .then((user) => {
                Roast.create(req.body).then(roast => {
                    user.roasts.push(roast)
                    user.save()
                    res.redirect(`/${req.params.userId}`)
                })
            })
    },
    show: (req, res) => {
        res.send('Roast #1')
    },
    delete: (req, res) => {
        res.send('deleted Roast')
    }
}

module.exports = roastController
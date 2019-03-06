const User = require('../models/User')
const Roast = require('../models/Roast')
const Jabs = require('../models/Jab')


const roastController = {
    index: (req, res) => {
        res.send('Index Page  for roasts')
    },
    new: (req, res) => {
        User.findById(req.params.userId)
        .then((user) => {
            res.render('roasts/new', { user })
        })
    },
    create: (req, res) => {
        User.findById(req.params.userId)
            .then((user) => {
                Roast.create(req.body).then(roast => {
                    user.roasts.push(roast)
                    user.save()
                    res.redirect(`/user/${req.params.userId}`)
                })
            })
    },
    show: (req, res) => {
        Roast.findById(req.params.roastId).populate("jabs")
       .then((roast) => {
           res.render('roasts/show', {roast})
       })
    },
    delete: (req, res) => {
        res.send('deleted Roast')
    }
}

module.exports = roastController
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
    edit: (req, res) => {
        Roast.findById(req.params.roastId).then((roast) => {
            res.render('roasts/edit', { roast })
        })
    },
    update: (req, res) => {
        Roast.findById(req.params.roastId)
        then((roast) => {
            Jabs.findByIdAndUpdate(req.params.jabId, req.body, { new: true }).then((jab) => {
                roast.jabs.push(jab)
                roast.save()
                res.redirect(`jabs/${req.params.jabId}`)
            })
        })
    },
    delete: (req, res) => {
        Roast.findByIdAndDelete(req.params.roastId).then(() => {
            console.log(`deleted ${req.params.roastId}`)
            res.redirect('/user')
        })
    }
}

module.exports = roastController
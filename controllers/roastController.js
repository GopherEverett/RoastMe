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
                res.render('roasts/show', { roast })
            })
    },
    edit: (req, res) => {
        const userId = req.params.userId
        Roast.findById(req.params.roastId).then((roast) => {
            res.render('roasts/edit', { roast, userId })
        })
    },
    update: (req, res) => {
        User.findById(req.params.userId)
            .then((user) => {
                Roast.findByIdAndUpdate(req.params.roastId, req.body, { new: true }).then((roast) => {
                    console.log(user)
                    user.roasts.push(roast)
                    user.save()
                    res.redirect(`roasts/${req.params.roastId}`)
                })
            })
    },
    delete: (req, res) => {
        User.findById(req.params.userId).then((user) => {
            user.roasts.map((roast, index) => {
                return roast == req.params.roastId ? user.roasts.splice(index, 1) : null
            })
            user.save()
        })
        .then(() => {
            Roast.findByIdAndDelete(req.params.roastId).then(() => {
                console.log(`deleted ${req.params.roastId}`)
            })
        })
    }
}

module.exports = roastController
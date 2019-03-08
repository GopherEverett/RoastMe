const User = require('../models/User')
const Roast = require('../models/Roast')

const roastController = {
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
                    user.roasts.push(roast)            //Push new roast into users roasts array
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
        Roast.findByIdAndUpdate(req.params.roastId, req.body, { new: true }).then(() => {
            console.log(req.params.roastId)
            res.redirect(`/user/${req.params.userId}`)
        })
    },
    delete: (req, res) => {
        User.findById(req.params.userId).then((user) => {
            user.roasts.filter(roastId => roastId !== req.params.roastId) //removes from users roast array
            user.save()
        })
            .then(() => {
                Roast.findByIdAndDelete(req.params.roastId).then(() => {
                    res.redirect(`/user/${req.params.userId}`)
                })
            })
    }
}

module.exports = roastController
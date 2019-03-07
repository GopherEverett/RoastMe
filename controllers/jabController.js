const User = require('../models/User')
const Roast = require('../models/Roast')
const Jabs = require('../models/Jab')

const jabController = {
    index: (req, res) => {
        res.send('Jabs')
    },
    new: (req, res) => {
        Roast.findById(req.params.roastId)
            .then((roast) => {
                res.render('jabs/new', { roast })
            })
    },
    create: (req, res) => {
        Roast.findById(req.params.roastId)
            .then((roast) => {
                Jabs.create(req.body).then(jab => {
                    roast.jabs.push(jab)
                    roast.save()
                    res.redirect(`/${req.params.roastId}/jabs/${jab._id}`)
                })
            })
    },
    show: (req, res) => {
        Jabs.findById(req.params.jabId)
            .then((jab) => {
                res.render('jabs/show', { jab })
            })
    },
    edit: (req, res) => {
        Jabs.findById(req.params.jabId).then((jab) => {
            res.render('jabs/edit', { jab })
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
        Jabs.findByIdAndDelete(req.params.jabId).then(() => {
            console.log(`deleted ${req.params.jabId}`)
            res.redirect('/user')
        })
    }
}

module.exports = jabController
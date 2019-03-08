const Roast = require('../models/Roast')
const Jabs = require('../models/Jab')

const jabController = {

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
                    res.redirect(`/user`)
                })
            })
    },
    show: (req, res) => {
        Jabs.findById(req.params.jabId)
            .then((jab) => {
                res.render('jabs/show', { jab })
            })
    },
    delete: (req, res) => {
        Jabs.findByIdAndDelete(req.params.jabId).then(() => {
            res.redirect('/user')
        })
    }
}

module.exports = jabController
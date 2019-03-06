const User = require('../models/User')
const Roast = require('../models/Roast')
const Jabs = require('../models/Jab')

const jabController = {
    index: (req,res) => {
        res.send('Jabs')
    },
    new: (req,res) => {
        Roast.findById(req.params.roastId)
        .then((roast) =>{
            res.render('jabs/new', {roast})
        })
    },
    create: (req,res) => {
        Roast.findById(req.params.roastId)
        .then((roast) => {
            Jabs.create(req.body).then(jab => {
                roast.jabs.push(jab)
                roast.save()
                res.redirect('/user')
            })  
        })
    },
    show: (req,res) => {
        Jabs.findById(req.params.jabId)
        .then((jab) => {
            res.render('jabs/show', {jab})
        })
    },
    edit: (req,res) => {
        res.render('jabs/edit')
    },
    update: (req,res) => {
        res.send('updated Jab')
    },
    delete: (req,res) => {
        Jabs.findByIdAndDelete(req.params.jabId).then(() => {
            console.log(`deleted ${req.params.jabId}`)
            res.redirect('/users')
        })
    }
}

module.exports = jabController
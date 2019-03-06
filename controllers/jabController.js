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
        
        // Roast.findById(req.params.roastId)
        // .then((roast) => {
        //     res.render('roasts/new', { roast })
        // })
    },
    create: (req,res) => {
        res.send('New Jab')
    },
    show: (req,res) => {
        res.send('Jab #1')
    },
    delete: (req,res) => {
        res.send('deleted Jab #1')
    }
}

module.exports = jabController
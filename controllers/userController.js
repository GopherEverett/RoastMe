const User = require('../models/User')
const Roasts = require('../models/Roast')
const userController = {
    index: (req,res) => {
        User.find()
        .then(users => {
            res.render('users/index',{users})
        })
    },
    new: (req,res) => {
        res.render('users/new')
    },
    create: (req,res) => {
        User.create(req.body).then(() => {
            res.redirect('/user')
        })
    },
    show: (req,res) => {
       User.findById(req.params.userId).populate('roasts') //populate with roasts to render in show page
       .then(user => {
           res.render('users/show', {user})
       })
    },
}
module.exports = userController 
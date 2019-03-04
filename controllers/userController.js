const User = require('../models/User')

const userController = {
    index: (req,res) => {
        User.find()
        // .populate('roasts')
        .then(users => {
            res.render('index',{users})
        })
    },
    new: (req,res) => {
        res.render('users/new')
    },
    create: (req,res) => {
        res.send('New User')
    },
    show: (req,res) => {
        res.send('User #1')
    },
    edit: (req,res) => {
        res.send('form to edit user')
    },
    update: (req,res) => {
        res.send('updated user')
    },
    delete: (req,res) => {
        res.send('deleted user')
    }
}
module.exports = userController 
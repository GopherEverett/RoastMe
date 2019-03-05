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
        User.create(req.body).then(user => {
            res.redirect('/')
        })
    },
    show: (req,res) => {
       User.findById(req.params.userId).then(user => {
           res.render('users/show', {user})
       })
    },
    
    delete: (req,res) => {
        res.send('deleted user')
    }
}
module.exports = userController 
const User = require('../models/User')
const Roasts = require('../models/Roast')

const userController = {
    index: (req,res) => {
        User.find()
        // .populate('roasts')
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
       User.findById(req.params.userId).populate('roasts')
       .then(user => {
           res.render('users/show', {user})
       })
    },
    
    delete: (req,res) => {
        User.findByIdAndDelete(req.params.userId).then(() => {
            console.log(`deleted ${req.params.userId}`)
            res.redirect('/')
            })
    }
}
module.exports = userController 
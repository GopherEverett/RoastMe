
const userController = {
    index: (req,res) => {
        res.send('Index Page')
    },
    new: (req,res) => {
        res.send('New Form')
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
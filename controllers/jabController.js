
const jabController = {
    index: (req,res) => {
        res.send('Jabs')
    },
    new: (req,res) => {
        res.send('New Form for jab')
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
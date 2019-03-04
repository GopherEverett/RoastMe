
const roastController = {
    index: (req,res) => {
        res.send('Index Page  for roasts')
    },
    new: (req,res) => {
        res.send('New Form for roast')
    },
    create: (req,res) => {
        res.send('New Roast')
    },
    show: (req,res) => {
        res.send('Roast #1')
    },
    delete: (req,res) => {
        res.send('deleted Roast')
    }
}

module.exports = roastController
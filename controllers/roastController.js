
const roastController = {
    index: (req,res) => {
        res.send('Index Page  for roasts')
    },
    new: (req,res) => {
        res.render('roasts/new')
    },
    create: (req,res) => {
        Roast.create(req.body).then(user => {
            res.redirect('/')
        })
    },
    show: (req,res) => {
        res.send('Roast #1')
    },
    delete: (req,res) => {
        res.send('deleted Roast')
    }
}

module.exports = roastController
require('dotenv').config()
const mongoose = require('mongoose')

if (process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI);
}
else {
    mongoose.connect('mongodb://localhost/RoastMe');
}
mongoose.connection.on('error', function (err) {
    console.error('MongoDB connection error: ' + err);
    process.exit(-1);
}
);




mongoose.connection.once('open', function() {
  console.log("MONGODB is now connected")

})
module.exports = mongoose


const mongoose = require("../db/connection");
const Schema = mongoose.Schema;


const Roast = new Schema ({
    content: String,
    createdOn: {
      type: Date,
      default: Date.now()
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    jabs: [Jab]
});
module.exports = mongoose.model('Roast', Roast)


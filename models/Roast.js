const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Jab = new Schema ({
    content: String,
    author: {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
});
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
    comments: [Jab]
});
module.exports = mongoose.model('Jab', Jab)
module.exports = mongoose.model('Roast', Roast)


const mongoose = require("../db/connection");
const Schema = mongoose.Schema;


const Roast = new Schema ({
    content: {
        type: String,
        maxlength: 139
    },
    createdOn: {
      type: Date,
      default: Date.now()
    },
    jabs: [{
        type: Schema.Types.ObjectId,
        ref: "Jab"
    }]
});
module.exports = mongoose.model('Roast', Roast)


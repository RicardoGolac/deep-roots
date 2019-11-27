const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const LCSchema = new Schema ({
    id : {
      type: Number,
      required: true
    },
    text: {
        type: String,
        required: true
      }
});

module.exports = LifeCoach = mongoose.model("lifecoach", LCSchema);
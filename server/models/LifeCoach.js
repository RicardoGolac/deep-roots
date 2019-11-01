const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const LCSchema = new Schema ({
    name: {
        type: String,
        required: true
      },
      rate: {
        type: String,
        required: true
      },
      about: {
        type: String,
        required: true
      },
      length: {
        type: String,
        required: true
      }
});

module.exports = LifeCoach = mongoose.model("lifecoach", LCSchema);
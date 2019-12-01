const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const HomeSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  message: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Home = mongoose.model("home", HomeSchema);

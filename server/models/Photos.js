const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const PhotoSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  imageLink: {
    type: String,
    required: true,
  },
  price: {
      type: String,
      required: true,
  }
});

module.exports = Photo = mongoose.model("photo", PhotoSchema);

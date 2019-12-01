const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
  name: {
    type: String,
    default: "none",
    required: true
  },
  message: {
    type: String,
    default: "none"
  },
  imageLink: {
    type: String,
    default: ""
  },
  description: {
    type: String,
    default: "none"
  },
  price: {
    type: Number,
    default: 0
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Image = mongoose.model("item", ImageSchema);

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
  name: {
    type: String,
    default: "none",
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Image = mongoose.model("item", ImageSchema);

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const WorkshopSchema = new Schema({
  id: {
    type: String,
    required: true
  },
  contents: {
    type: String,
    required: true
  },
  date: {
      type: Date,
      default: Date.now
  }
});

module.exports = Workshop = mongoose.model("workshops", WorkshopSchema);

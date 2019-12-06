const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const WorkshopSchema = new Schema({
  id: {
    type: String,
  },
  sectionTitle: {
    type: String
  },
  title: {
    type: String,
  },
  contents: {
    type: String,
  },
  price: {
    type: String
  },
  date: {
      type: Date,
      default: Date.now
  }
});

module.exports = Workshop = mongoose.model("workshops", WorkshopSchema);

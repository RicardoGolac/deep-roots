const mongoose = require("mongoose");
const db = require("./keys");

module.exports = {
  start: function() {
    mongoose
      .connect(process.env.MONGODB_URI || db.mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
      .then(() => console.log("MongoDB Connected..."))
      .catch(err => console.log(err));
  },
  connection: mongoose.connection
};

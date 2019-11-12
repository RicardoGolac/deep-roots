const mongoose = require("mongoose");

try {
  const db = require("./keys.js");
  // do stuff
  module.exports = {
    start: function() {
      mongoose
        .connect(db.mongoURI, {
          useNewUrlParser: true,
          useUnifiedTopology: true
        })
        .then(() => console.log("MongoDB Connected..."))
        .catch(err => console.log(err));
    },
    connection: mongoose.connection
  };
} catch (ex) {
  module.exports = {
    start: function() {
      mongoose
        .connect(process.env.MONGODB_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true
        })
        .then(() => console.log("MongoDB Connected..."))
        .catch(err => console.log(err));
    },
    connection: mongoose.connection
  };
}

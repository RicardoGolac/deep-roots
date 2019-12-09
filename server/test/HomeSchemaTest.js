var should = require("should"),
  mongoose = require("mongoose"),
  Home = require("../models/HomeSchema"),
  config = require("../config/keys");

var home, id;

home = {
  name: "Test Home",
  message: "Have a lovely day!"
};

describe("Home Schema Unit Tests", function() {
  before(function(done) {
    mongoose.connect(config.mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    mongoose.set("useCreateIndex", true);
    mongoose.set("useFindAndModify", false);
    done();
  });

  describe("Saving to database", function() {
    // Set timeout
    this.timeout(10000);

    it("saves properly when name and message are provided", function(done) {
      new Home({
        name: home.name,
        message: home.message
      }).save(function(err, user) {
        should.not.exist(err);
        id = home._id;
        done();
      });
    });

    it("throws an error when name not provided", function(done) {
      new Home({
        message: home.message
      }).save(function(err) {
        should.exist(err);
        done();
      });
    });
  });

  afterEach(function(done) {
    if (id) {
      Home.deleteOne({ _id: id }).exec(function() {
        id = null;
        done();
      });
    } else {
      done();
    }
  });
});

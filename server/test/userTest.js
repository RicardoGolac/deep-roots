var should = require("should"),
  mongoose = require("mongoose"),
  User = require("../models/UserSchema"),
  config = require("../config/keys");

var user, id;

user = {
  name: "Test User",
  email: "test@email.com",
  password: "securepassword"
};

describe("User Schema Unit Tests", function() {
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

    it("saves properly when name, email, and password are provide", function(done) {
      new User({
        name: user.name,
        email: user.email,
        password: user.password
      }).save(function(err, user) {
        should.not.exist(err);
        id = user._id;
        done();
      });
    });

    it("throws an error when name not provided", function(done) {
      new User({
        email: user.email,
        password: user.password
      }).save(function(err) {
        should.exist(err);
        done();
      });
    });

    it("throws an error when email not provided", function(done) {
      new User({
        name: user.name,
        password: user.password
      }).save(function(err) {
        should.exist(err);
        done();
      });
    });

    it("throws an error when password not provided", function(done) {
      new User({
        name: user.name,
        email: user.email
      }).save(function(err) {
        should.exist(err);
        done();
      });
    });
  });

  afterEach(function(done) {
    if (id) {
      User.deleteOne({ _id: id }).exec(function() {
        id = null;
        done();
      });
    } else {
      done();
    }
  });
});

var should = require("should"),
  mongoose = require("mongoose"),
  LC = require("../models/LifeCoach"),
  config = require("../config/keys");

var lc, idDatabase;

lc = {
  id: 1,
  text: "testing testing, 1, 2 ,3"
};

describe("Life Coaching Schema Unit Tests", function() {
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

    it("saves properly when id and text are provided", function(done) {
      new LC({
        id: lc.id,
        text: lc.text
      }).save(function(err, user) {
        should.not.exist(err);
        idDatabase = user._id;
        done();
      });
    });

    it("throws an error when id not provided", function(done) {
      new LC({
        text: lc.text
      }).save(function(err) {
        should.exist(err);
        done();
      });
    });

    it("throws an error when text not provided", function(done) {
      new LC({
        id: lc.id
      }).save(function(err) {
        should.exist(err);
        done();
      });
    });

    it("throws an error when id and text are not provided", function(done) {
      new LC({}).save(function(err) {
        should.exist(err);
        done();
      });
    });
  });

  afterEach(function(done) {
    if (idDatabase) {
      LC.deleteOne({ _id: idDatabase }).exec(function() {
        idDatabase = null;
        done();
      });
    } else {
      done();
    }
  });
});

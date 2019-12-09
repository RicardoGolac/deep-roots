var should = require("should"),
  mongoose = require("mongoose"),
  Workshop = require("../models/WorkshopSchema"),
  config = require("../config/keys");

var workshop, id;

workshop = {
  id: "1",
  sectionTitle: "section",
  title: "title test",
  contents: "workshop information here",
  price: "this workshop costs this much"
};

describe("Workshop Schema Unit Tests", function() {
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

    it("saves properly when id, sectionTitle, title, contents, and price are provieded", function(done) {
      new Workshop({
        id: workshop.id,
        sectionTitle: workshop.sectionTitle,
        title: workshop.title,
        contents: workshop.contents,
        price: workshop.price
      }).save(function(err, user) {
        should.not.exist(err);
        id = user._id;
        done();
      });
    });
  });

  afterEach(function(done) {
    if (id) {
      Workshop.deleteOne({ _id: id }).exec(function() {
        id = null;
        done();
      });
    } else {
      done();
    }
  });
});

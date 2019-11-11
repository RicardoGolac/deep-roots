const express = require("express");
const mongooseSetup = require("./server/config/database");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// Authentication imports
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const passport = require("passport");
// List of Routes (name them in plural form)
const users = require("./server/routes/users");
const index = require("./server/routes/index");
// Passport Config
require("./server/config/passport")(passport);

// Associations
const associations = require('./server/routes/associations');

// Start express server
const app = express();
app.set("trust proxy", true);

// Bodyparser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // allows us to deal with form data and json data

// Connect to Database
mongooseSetup.start();

const port = process.env.PORT || 5000;

// Express session middleware
app.use(
  session({
    name: "sid",
    resave: false,
    saveUninitialized: false,
    secret: "secret",
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    cookie: {
      httpOnly: true,
      secure: false,
      maxAge: 1000 * 60 * 60 * 24 * 1 // day
    }
  })
);

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// Globals
app.use((req, res, next) => {
  if (req.session) {
    res.locals.session = req.session;
  }
  next();
});

// Use Routes
// List All Routes here
app.use("/", index);
app.use("/users", users);
app.use("/associations",associations);

app.listen(port, () => console.log(`Server started on port ${port}`));

const express = require("express");
const router = express.Router();

const Home = require("../models/HomeSchema");

// Get all Homes
router.get("/", (req, res) => {
  Home.find()
    .then(homes => res.json(homes))
    .catch(err => res.status(400).json("Error: " + err));
});

// Add new Home
router.post("/add", (req, res) => {
  const newHome = new Home({
    // 'req.body' will contain info from a form in the front end
    // make sure to assign all parts of it to the properties of our schema
    name: req.body.name,
    message: req.body.message
  });
  newHome
    .save()
    .then(() => res.json("Home added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

// Update by ID
router.post("/update/:id", (req, res) => {
  Home.findById(req.params.id)
    .then(home => {
      home.name = req.body.name;
      home.message = req.body.message;

      home
        .save()
        .then(() => res.json("Home updated!"))
        .catch(err => res.status(400).json("Error: " + err));
    })
    .catch(err => res.status(400).json("Error: " + err));
});

// Find By ID
router.get("/:id", (req, res) => {
  Home.findById(req.params.id)
    .then(home => res.json(home))
    .catch(err => res.status(404).json("Error: " + err));
});

// Delete by ID
router.delete("/:id", (req, res) => {
  Home.findByIdAndDelete(req.params.id)
    .then(() => res.json("Exercise deleted!"))
    .catch(err => res.status(404).json("Error: " + err));
});

module.exports = router;

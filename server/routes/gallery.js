const express = require("express");
const router = express.Router();

const Image = require("../models/ImageSchema");

// GET all gallery images
router.get("/", (req, res) => {
  Image.find()
    .sort({ date: -1 })
    .then(images => res.json(images))
    .catch(err => res.status(400).json("Error: " + err));
});

// ADD new Image
router.post("/add", (req, res) => {
  const newImage = new Image({
    // 'req.body' will contain info from a form in the front end
    // make sure to assign all parts of it to the properties of our schema
    name: req.body.name,
    message: req.body.message,
    imageLink: req.body.imageLink,
    description: req.body.description,
    price: req.body.price
  });
  newImage
    .save()
    .then(() => res.json("Image added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

// Update Image by ID
router.post("/update/:id", (req, res) => {
  Image.findById(req.params.id)
    .then(image => {
      image.name = req.body.name;
      image.message = req.body.message;
      image.imageLink = req.body.imageLink;
      image.description = req.body.description;
      image.price = req.body.price;

      image
        .save()
        .then(() => res.json("Image updated!"))
        .catch(err => res.status(400).json("Error: " + err));
    })
    .catch(err => res.status(400).json("Error: " + err));
});

// Find By ID
router.get("/:id", (req, res) => {
  Image.findById(req.params.id)
    .then(image => res.json(image))
    .catch(err => res.status(404).json("Error: " + err));
});

// Delete by ID
router.delete("/:id", (req, res) => {
  Image.findByIdAndDelete(req.params.id)
    .then(() => res.json("Exercise deleted!"))
    .catch(err => res.status(404).json("Error: " + err));
});

module.exports = router;

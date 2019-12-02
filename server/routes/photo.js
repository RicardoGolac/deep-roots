const express = require("express");
const router = express.Router();

// Item Model
const Photo = require("../models/Photos");

router.get("/", (req, res) => {
    Photo.find().then(photos => res.json(photos));
});

router.post("/:id", (req, res) => {
    // this is an update to existing photo
    Photo.findByIdAndUpdate(req.params.id, { $set: req.body })
        .then(idc => res.redirect("/gallery"))
        .catch(err => res.status(404).json({ success: false }));
});

router.delete("/:id", (req, res) => {
    Photo.findById(req.params.id)
    .then(item => item.remove().then(() => res.redirect("/gallery")))
    .catch(err => res.redirect("/gallery"));
});

router.post("/", (req, res) => {
    // creating new photo

    const newPhoto = new Photo({
        title: req.body.title,
        imageLink: req.body.imageLink,
        price: req.body.price,
    });

    newPhoto.save().then(idc => res.redirect("/gallery"));
});

module.exports = router;
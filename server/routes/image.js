const express = require("express");
const router = express.Router();

// GET all gallery images
router.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});

module.exports = router;

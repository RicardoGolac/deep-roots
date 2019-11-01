const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt.js");
const jwt = require("jsonwebtoken");
const db = require("./server/config/keys").mongoURI;

// User Model
const Item = require("../../models/Item");

// @route POST api/auth
// @desc  Auth user
// @access Public
router.post("/", (req, res) => {});

// @route POST api/items
// @desc  Create An Item
// @access Public
router.post("/", (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });

  newItem.save().then(item => res.json(item));
});

// @route DELETE api/items/:id
// @desc  Delete An Item
// @access Public
router.delete("/:id", (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;

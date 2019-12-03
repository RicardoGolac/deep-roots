const express = require("express");
const router = express.Router();

const Workshop = require("../models/WorkshopSchema");

// Get all Workshops
router.get("/", (req, res) => {
  Workshop.find()
    .then(Workshops => res.json(Workshops))
    .catch(err => res.status(400).json("Error: " + err));
});

// Add new Workshop
router.post("/add", (req, res) => {
  const newWorkshop = new Workshop({
    // 'req.body' will contain info from a form in the front end
    // make sure to assign all parts of it to the properties of our schema
    id: req.body.id,
    contents: req.body.contents
  });
  newWorkshop
    .save()
    .then(() => res.json("Workshop added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

// Update by ID
// router.post("/update/:id", (req, res) => {
//   Workshop.findById(req.params.id)
//     .then(Workshops => {
//       Workshops.id = req.body.id;
//       Workshops.contents = req.body.contents;

//       Workshops
//         .save()
//         .then(() => res.json("Workshop updated!"))
//         .catch(err => res.status(400).json("Error: " + err));
//     })
//     .catch(err => res.status(400).json("Error: " + err));
// });

// Find By ID
// router.get("/:id", (req, res) => {
//   Workshop.findById(req.params.id)
//     .then(Workshops => res.json(Workshops))
//     .catch(err => res.status(404).json("Error: " + err));
// });

// Delete by ID
// router.delete("/:id", (req, res) => {
//   Workshop.findByIdAndDelete(req.params.id)
//     .then(() => res.json("Exercise deleted!"))
//     .catch(err => res.status(404).json("Error: " + err));
// });

module.exports = router;

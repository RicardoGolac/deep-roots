 var Associations = require('../models/Associations.js'),
     express = require('express'),
     router = express.Router();

// GET all gallery images
router.get("/", (req, res) => {
  Associations.find()
    .then(associates => res.json(associates))
    .catch(err => res.status(400).json("Error: " + err));
});

// ADD new Image
router.post("/add", (req, res) => {
  const newAssociate = new Associations({
    // 'req.body' will contain info from a form in the front end
    // make sure to assign all parts of it to the properties of our schema
    name: req.body.name,
    link: req.body.link
  });
  newAssociate
    .save()
    .then(() => res.json("Associate added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

// Update Associate by ID
router.post("/update/:id", (req, res) => {
  Associations.findById(req.params.id)
    .then(associate => {
      associate.name = req.body.name;
      associate.message = req.body.message;
      associate.link = req.body.link;
      associate.description = req.body.description;
      associate.price = req.body.price;

      associate
        .save()
        .then(() => res.json("Associate updated!"))
        .catch(err => res.status(400).json("Error: " + err));
    })
    .catch(err => res.status(400).json("Error: " + err));
});

// Find By ID
router.get("/:id", (req, res) => {
  Associations.findById(req.params.id)
    .then(association => res.json(association))
    .catch(err => res.status(404).json("Error: " + err));
});

// Delete by ID
router.delete("/:id", (req, res) => {
  Associations.findByIdAndDelete(req.params.id)
    .then(() => res.json("Exercise deleted!"))
    .catch(err => res.status(404).json("Error: " + err));
});

module.exports = router;

// var associations = require('../controllers/associations.server.controller.js'),
//     Associations = require('../models/Associations.js'),
//     express = require('express'),
//     router = express.Router();

// // Getting all Associations
// router.get('/', (req, res) => {
//   Associations.find()
//     .then(associations => res.json(associations))
//     .catch(err => res.status(400).json("Error: " + err));
// });

// // New Associaitons
// router.post('/', (req, res) => {
//   const newAssociation = new Associations({
//     name: req.body.name,
//     link: req.body.link
//   });
//   newAssociation
//     .save()
//     .then(association => res.json(association))
//     .catch(err => res.status(400).json("Error: " + err));
// });

// // Find By ID
// router.get("/:id", (req, res) => {
//   Associations.findById(req.params.id)
//     .then(associations => res.json(associations))
//     .catch(err => res.status(404).json("Error: " + err));
// });

// // Delete by ID
// router.delete("/:id", (req, res) => {
//   Associations.findByIdAndDelete(req.params.id)
//     .then(() => res.json("Exercise deleted!"))
//     .catch(err => res.status(404).json("Error: " + err));
// });

// module.exports = router;

// // router.delete('/:id',(req,res) => {
// //   Associations.findById(req.params.id)
// //     .then(association => association.remove().then(()=>res.json({success: true})))
// //     .catch(err => res.status(404).json({success: false}));
// // })

// // router.route('/')
// //   .get(associations.list)

// // router.route('/:listingId')
// //   .get(associations.read)
// //   .delete(associations.delete);

// // router.param('associationId', associations.listingByID);

// // module.exports = router;

var associations = require('../controllers/associations.server.controller.js'),
    Associations = require('../models/Associations.js'),
    express = require('express'),
    router = express.Router();

router.get('/', (req, res) => {
  Associations.find()
  .then(associations => res.json(associations))
});

router.post('/', (req, res) => {
  const newAssociation = new Associations({
    name: req.body.name
  });
  newAssociation.save().then(association => res.json(association));
});

router.delete('/:id',(req,res) => {
  Associations.findById(req.params.id).then(association => 
    association.remove().then(()=>res.json({success: true}))
    )
    .catch(err => res.status(404).json({success: false}));
})

router.route('/')
  .get(associations.list)

router.route('/:listingId')
  .get(associations.read)
  .delete(associations.delete);

router.param('associationId', associations.listingByID);

module.exports = router;
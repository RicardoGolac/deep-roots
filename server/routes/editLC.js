const express = require("express");
const router = express.Router();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

const LifeCoach = require("../models/LifeCoach");



router.get('/display/:id', (req,res) => {
    
    var query = LifeCoach.findOne({id:req.params.id}, (err,data) => {
        if (err) 
        console.log(err);
        else 
        console.log(data);
        return res.send(data);
    })
});
router.post('/edit/:id', (req,res) => {

    LifeCoach.findOne({id:req.params.id})
    .then(newt => {
        newt.id = req.body.id;
        newt.text = req.body.text;
        console.log(req.body.id);
        console.log(req.body.text);

        newt
        .save()
        .then(() => res.json("updated"))
        .catch(err => res.status(400).json("Error: " + err));
    })
    .catch(err => err => res.status(400).json("Error: " + err));
});

/*router.get('/display/:id',(req,res) => {
    LifeCoach.findById(req.params.id)
    .then(text => res.json(text))
    .catch(err => res.status(404).json("error: " + err))
})
*/
router.post('/add', (req, res) => {
    const newLC = new LifeCoach({
        id: req.body.id,
        text: req.body.text
    });
    newLC
    .save()
    .then(() => res.json("lc added"))
    .catch(err => res.status(400).json("error: " + err));
  });

  module.exports = router;
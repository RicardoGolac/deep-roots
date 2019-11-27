const express = require("express");
const router = express.Router();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

const LifeCoach = require("../models/LifeCoach");



router.get('/display', (req,res) => {
    LifeCoach.find({id:0}, (err,data) => {
        if (err) 
        console.log(err);
        else 
        console.log(data);
        return res.send(data);
    })
});

router.post('/update', bodyParser.text(), (req, res) => {

  });

  module.exports = router;
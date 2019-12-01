var mongoose = require('mongoose'),
    Associations = require('../models/Associations.js');

exports.create = function(req, res) {
  var associations = new Associations(req.body);
 
  associations.save(function(err) {
    if(err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      res.json(associations);
    }
  });
};

exports.read = function(req, res) {
  res.json(req.associations);
};

exports.update = function(req, res) {
  var associations = req.associations;

  associations.name = req.body.name;

  associations.save(function(err) {
    if(err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      res.json(associations);
    }
  });
};

exports.delete = function(req, res) {
  var associations = req.listing;

  associations.remove(function(err) {
    if(err) {
      res.status(400).send(err);
    }
    else {
      res.end();
    }
  })
};

exports.list = function(req, res) {
  var associations = req.associations;
  associations.find().sort('code').exec(function(err, associations) {
    if(err) {
      res.status(400).send(err);
    } else {
      res.json(associations);
    }
  });
};

exports.listingByID = function(req, res, next, id) {
  Associations.findById(id).exec(function(err, associations) {
    if(err) {
      res.status(400).send(err);
    } else {
      req.associations = associations;
      next();
    }
  });
};
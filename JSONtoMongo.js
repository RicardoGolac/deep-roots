'use strict';

var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Associates = require('./server/models/Associations.server.model.js'), 
    config = require('./server/config/keys.js');

mongoose.connect(config.mongoURI);

fs.readFile('Associations.json', function(err,data) {
  if (err) throw err;
  let rf = JSON.parse(data);
  rf.entries.forEach(function(element) {
    Associates.create(element);
  });
});
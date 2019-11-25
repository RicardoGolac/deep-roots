const express = require("express");
const router = express.Router();
var nodemailer = require('nodemailer');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
const creds = require('../config/mailer'); 

var transport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
         user: creds.USER,
         pass: creds.PASS
     }
 });

transport.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});


router.post('/complete', jsonParser, (req, res) => {
    var message = JSON.stringify(req.body, null, "\t");
    var mail = {
      from: 'deeprootssurveybot@gmail.com',
      to: 'emmit.bauer@gmail.com',  
      subject: 'New Life Coaching Survey Filled Out!',
      text: message
    }
  
    transport.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          msg: 'fail'
        })
      } else {
        res.json({
          msg: 'success'
        })
      }
    })
  });

  router.post('/question', bodyParser.text(), (req, res) => {
    var name = req.body.name
    var email = req.body.email
    var message = req.body.message
    var content = `name: ${name} \n email: ${email} \n message: ${message} `

    var mail = {
      from: 'surveybot@dr.com',
      to: 'turbado@dr.com',  
      subject: 'Someone has a question about life coaching!',
      text: content
    }
  
    transport.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          msg: 'fail'
        })
      } else {
        res.json({
          msg: 'success'
        })
      }
    })
  });

  module.exports = router;
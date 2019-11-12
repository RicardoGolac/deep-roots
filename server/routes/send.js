const express = require("express");
const router = express.Router();
var nodemailer = require('nodemailer');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
//const creds = require('../config/mailer'); set up for real email

var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "1888a41eca5f5a",
      pass: "c8cfc8bab2bb69"
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
      from: 'surveybot@dr.com',
      to: 'turbado@dr.com',  
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
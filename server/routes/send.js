const express = require("express");
const router = express.Router();
var nodemailer = require('nodemailer');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
//const creds = require('../config/config');

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
    console.log(JSON.stringify(message));
    var content = `message: ${message} `
    var mail = {
      from: 'surveybot@dr.com',
      to: 'emmit.bauer@yahoo.com',  //Change to email address that you want to receive messages on
      subject: 'New Message from Survey',
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

  module.exports = router;
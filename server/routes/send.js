const express = require("express");
const router = express.Router();
var nodemailer = require("nodemailer");
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();

try {
  const creds = require("../config/mailer");
  var transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: creds.USER,
      pass: creds.PASS
    }
  });
} catch (ex) {
  var transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.USER,
      pass: process.env.PASS
    }
  });
}

transport.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take messages");
  }
});

router.post("/complete", jsonParser, (req, res) => {
  var message = JSON.stringify(req.body, null, "\t");
  var mail = {
    from: "deeprootssurveybot@gmail.com",
    to: "deeproots16@gmail.com",
    subject: "New Life Coaching Survey Filled Out!",
    text: message
  };

  transport.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: "fail"
      });
    } else {
      res.json({
        msg: "success"
      });
    }
  });
});

router.post("/question", bodyParser.text(), (req, res) => {
  var name = req.body.name;
  var email = req.body.email;
  var message = req.body.message;
  var content = `name: ${name} \n email: ${email} \n question: ${message} `;

  var mail = {
    from: "deeprootssurveybot@gmail.com",
    to: "deeproots16@gmail.com",
    subject: "Someone has a question about life coaching!",
    text: content
  };

  transport.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: "fail"
      });
    } else {
      res.json({
        msg: "success"
      });
    }
  });
});

module.exports = router;

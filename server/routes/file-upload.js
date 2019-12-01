const express = require("express");
const router = express.Router();

const upload = require("../services/file-upload");

const singleUpload = upload.single("image");

router.post("/image-upload", function(req, res) {
  singleUpload(req, res, function(err) {
    /* if (req.file.location) console.log(req.file.location); */
    if (err) {
      /* console.log("Error detected"); */
      return res.status(422).send({
        errors: [{ title: "File Upload Error", detail: err.message }]
      });
    } /* else {
      if (req.file === undefined) {
        console.log("No file detected");
        res.json("Error: No file detected");
      } else {
        console.log("File found!");
        const imageLocation = req.file.location;
        res.json({ location: imageLocation });
        return res.json({ imageUrl: req.file.location });
      }
    } */
    return res.json({ imageUrl: req.file.location });
  });
});

module.exports = router;

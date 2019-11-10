const express = require("express");
const router = express.Router();

// Welcome Page
router.get("/", (req, res) => {});

router.get("/dashboard", (req, res) => {
  if (req.isAuthenticated()) {
    return res.send(req.user);
  } else {
    res.send({
      success: false,
      message: "Your are not authorized!"
    });
  }
});

module.exports = router;

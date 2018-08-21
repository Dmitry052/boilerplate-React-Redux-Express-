const express = require("express");

const router = express.Router();

router.get("/login", (req, res) => {
  req.session.user = {
    name: "Test"
  };
  res.send("<a href='/'>Click to home</a>");
});

router.get("/logout", (req, res) => {
  req.session.destroy();
  res.send(`Session: ${req.session}`);
});

module.exports = router;

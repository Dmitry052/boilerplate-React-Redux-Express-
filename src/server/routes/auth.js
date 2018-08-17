const express = require("express");

const router = express.Router();

router.get("/login", (req, res) => {
  res.send("get - login");
});

router.get("/logout", (req, res) => {
  res.send("get - logout");
});

module.exports = router;

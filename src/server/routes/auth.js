const express = require("express");

const router = express.Router();
let prefix;

router.get("/create", (req, res) => {
  if (req.session) {
    req.session.user = {
      name: "Test"
    };
  }
  res.redirect(`${prefix}/`);
});

router.get("/login", (req, res) => {
  res.send(
    `<center><h4>You have not session</h4> => <a href='${prefix}/auth/create'>Create session</a></center>`
  );
});

router.get("/logout", (req, res) => {
  if (req.session) {
    req.session.destroy();
  }

  res.redirect("/");
});

module.exports = data => {
  const { ROUTES_PREFIX_STRING } = data;
  prefix = ROUTES_PREFIX_STRING;
  return router;
};

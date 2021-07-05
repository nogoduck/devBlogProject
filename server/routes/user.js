const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

const { User } = require("../models/UserSchema");

console.log("UU: ", User);
router.post("/signup", (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  console.log("INFO: ", user);

  user
    .save()
    .then(() => {
      console.log("SUC: ", user);
    })
    .catch((err) => {
      console.log("ERR: ", err);
    });
  res.send("SUCCESS REGISTER");
});

module.exports = router;

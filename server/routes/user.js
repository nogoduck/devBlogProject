const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

const { User } = require("../models/UserSchema");

router.post("/signup", (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  user.save((err, data) => {
    if (err) return err;
    console.log("save data: ", data);
    return res.status(200).json({
      success: true,
    });
  });
  res.send("SUCCESS REGISTER");
});

module.exports = router;

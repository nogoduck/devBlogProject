const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

const User = require("../models/UserSchema");

console.log("UU: ", User);
router.post("/signup", (req, res) => {
  //   console.log(req);
  console.log(req.body);
  res.send("hi");
});

module.exports = router;

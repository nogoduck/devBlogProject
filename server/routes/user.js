const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

const { User } = require("../models/User");

router.post("/signup", (req, res) => {
  const user = new User(req.body);

  user.save((err, data) => {
    if (err) return res.json({ success: false, err });
    console.log("save data: ", data);
    return res.status(200).json({
      success: true,
    });
  });
});

router.post("/signin", (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user) {
      return res.json({
        loginSuccess: false,
        message: "등록되어 있는 이메일이 존재하지 않습니다.",
      });
    }

    User.comparePassword(req.body.password, (err, equal) => {});
  });
});

module.exports = router;

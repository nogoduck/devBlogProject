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
      signUpSuccess: true,
    });
  });
});

router.post("/signin", (req, res) => {
  console.log(req.body);

  User.findOne({ email: req.body.email }, (err, user) => {
    console.log("user :: ", user);
    if (!user) {
      return res.json({
        signInSuccess: false,
        message: "등록되어 있는 이메일이 존재하지 않습니다.",
      });
    }
    user.test("Plain TEXT", (data) => {
      console.log(data);
    });

    // User.comparePassword(req.body.password, (err, pass) => {
    //   if (!pass) {
    //     return res.json({
    //       signInSuccess: false,
    //       message: "비밀번호가 틀렸습니다",
    //     });
    //   }
    //   res.json({ loginSuccess: true, message: "로그인이 성공되었습니다" });

    //   user.createToken((err, user) => {
    //     if (err) return res.status(400).send(err);

    //   });
    // });
  });
});

module.exports = router;

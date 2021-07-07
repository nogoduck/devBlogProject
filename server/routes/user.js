const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const cookieParser = require("cookie-parser");

const { User } = require("../models/User");
const { auth } = require("../middleware/auth");

router.post("/signup", (req, res) => {
  const user = new User(req.body);

  user.save((err, data) => {
    if (err) return res.json({ success: false, err });
    console.log("save data: ", data);
    return res.status(200).json({
      signUpSuccess: true,
      message: "회원가입에 성공했습니다.",
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

    user.comparePassword(req.body.password, (err, pass) => {
      console.log("PASS", pass);
      if (!pass) {
        return res.json({
          signInSuccess: false,
          message: "비밀번호가 틀렸습니다",
        });
      }

      user.createToken((err, user) => {
        if (err) return res.status(400).send(err);
        console.log(user);

        res.cookie("user_auth", user).status(200).json({
          loginSuccess: true,
          userId: user._id,
          message: "로그인이 성공되었습니다",
        });
      });
    });
  });
});

router.get("/auth", auth, (req, res) => {
  let token = req.cookies.user_auth;
  console.log("middle token: ", token);

  res.status(200).json({
    _id: req.user._id,
    name: req.user.name,
    email: req.user.email,
    isAuth: true,
  });
});

router.get("/signout", auth, (req, res) => {
  User.findOneAndUpdate({ _id: req.user._id }, { token: "" }, (err, user) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).send({
      success: true,
    });
  });
});
module.exports = router;

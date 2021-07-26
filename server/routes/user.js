const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const path = require("path");
const multer = require("multer");

const { User } = require("../models/User");
const { auth } = require("../middleware/auth");

const fileExtension = ".png";
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "UploadProfileImage/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}${fileExtension}`);
  },
});

const upload = multer({ storage: storage });

router.post("/update/image", upload.single("image"), (req, res) => {
  const { _id } = req.body;
  const {
    fieldname,
    originalname,
    mimetype,
    destination,
    filename,
    path,
    size,
  } = req.file;

  console.log("req.body > ", req.body);
  console.log("req.file > ", req.file);

  //미들웨어 통과 => 이미지 저장 성공
  //db에 이미지 경로 저장
  User.findByIdAndUpdate(
    _id,
    { imagePath: path },
    { new: true },
    (err, user) => {
      console.log("user >> ", user);
      if (err) return res.json({ success: false, err });
      return res.status(200).json({
        success: true,
        fileName: filename,
        filePath: path,
        message: "파일을 저장했습니다.",
      }); //return.res
    }
  ); //User.findByIdAndUpdate
}); //router.post

router.post("/signup", (req, res) => {
  const user = new User(req.body);

  user.save((err, data) => {
    if (err) return res.json({ success: false, err });
    console.log("save data: ", data);
    return res.status(200).json({
      signupSuccess: true,
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
        signinSuccess: false,
        message: "등록되어 있는 이메일이 존재하지 않습니다.",
      });
    }

    user.comparePassword(req.body.password, (err, pass) => {
      console.log("PASS", pass);
      if (!pass) {
        return res.json({
          signinSuccess: false,
          message: "비밀번호가 틀렸습니다",
        });
      }

      user.createToken((err, user) => {
        if (err) return res.status(400).send(err);
        console.log(user);

        res.cookie("user_auth", user.token).status(200).json({
          signinSuccess: true,
          userId: user._id,
          message: "로그인이 성공되었습니다",
        });
      });
    });
  });
});

router.get("/auth", auth, (req, res) => {
  let token = req.cookies.user_auth;
  console.log("middle token >> ", token);

  res.status(200).json({
    isAuth: true,
    _id: req.user._id,
    nickname: req.user.nickname,
    name: req.user.name,
    email: req.user.email,
    imagePath: req.user.imagePath,
  });
});

router.get("/signout", auth, (req, res) => {
  User.findOneAndUpdate({ _id: req.user._id }, { token: "" }, (err, user) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
      testVariable: false,
    });
  });
});

router.post("/update/nickname", (req, res) => {
  const { _id, changeNickname } = req.body;
  User.findByIdAndUpdate(_id, { nickname: changeNickname }, (err, user) => {
    if (err) return res.json({ updateNickname: false, err });
    return res.status(200).json({
      updateNickname: true,
      message: "닉네임을 변경했습니다.",
    });
  });
});

router.patch("/update/password", (req, res) => {
  const { _id, currentPassword, changePassword } = req.body;

  //아이디 조회
  User.findById(_id, (err, user) => {
    if (!user) {
      return res.json({
        updatePassword: false,
        message: "_id값과 동일한 유저가 존재하지 않습니다.",
      });
    }

    // 유저가 존재한다면 현재 비밀번호 복호화 후 일치하는지 확인
    console.log("[update] user found by id >> ", user);
    user.comparePassword(currentPassword, (err, pass) => {
      if (!pass) {
        return res.json({
          updatePassword: false,
          message: "현재 로그인된 계정과 입력된 비밀번호가 일치하지 않습니다.",
        });
      }

      //비밀번호가 일치한 경우 바꾸기를 희망하는 비밀번호를 암호화한다
      user.encryptPassword(changePassword, (err, encodePassword) => {
        console.log("err >> ", err);
        console.log("encodePassword >> ", encodePassword);

        //암호화 한 비밀번호를 db에 저장한다.
        User.findByIdAndUpdate(
          _id,
          { password: encodePassword },
          { new: true },
          (err, doc) => {
            if (err) console.log("[update] err >> ", err);
            console.log("[update] doc >> ", doc);
            res.status(200).json({
              updatePassword: true,
              message: "비밀번호를 변경했습니다.",
            });
          }
        ); //User.findByIdAndUpdate
      }); //user.encryptPassword
    }); //user.comparePassword
  }); //User.findById
}); //router.patch

router.delete("/delete/account", (req, res) => {
  console.log(req.body);
  const { _id, email, password } = req.body.payload;
  console.log(_id);
  console.log(email);

  User.findById(_id, (err, user) => {
    if (!user) {
      return res.json({
        deleteAccount: false,
        message: "_id값과 동일한 유저가 존재하지 않습니다.",
      });
    } else {
      console.log("[delete] user found by id >> ", user);
    }

    //유저를 찾았으면 입력된 이메일과 동일한지 비교
    if (email !== user.email) {
      return res.json({
        deleteAccount: false,
        message: "현재 로그인된 계정과 입력된 이메일이 일치하지 않습니다.",
      });
    } else {
      console.log("[delete] compare email >> ", true);
    }

    //이메일이 동일하다면 입력된 비밀번호를 복호화해서 등록된 비밀번호와 비교
    user.comparePassword(password, (err, pass) => {
      if (!pass) {
        return res.json({
          deleteAccount: false,
          message: "현재 로그인된 계정과 입력된 비밀번호가 일치하지 않습니다.",
        });
      }

      //비밀번호가 일치
      console.log("[delete] compare password >> ", true);
      // 비밀번호가 동일한 경우 db에서 해당계정을 삭제한다
      User.findByIdAndRemove(_id, (err, doc) => {
        console.log("[result] doc >> ", doc);
        if (err) {
          console.log("[delete] doc delete result >> ", false, err);
          return res.status(500).json({ message: err });
        } else {
          console.log("[delete] doc delete result >> ", true);
          return res.status(200).json({
            deleteAccount: true,
            data: doc,
          });
        }
      }); //User.findByIdAndRemove
    }); //user.comparePassword
  }); //User.findByid
}); //router.delete

module.exports = router;

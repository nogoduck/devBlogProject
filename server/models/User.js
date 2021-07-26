const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema(
  {
    nickname: {
      type: String,
      trim: true,
      required: true,
    },
    name: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
    },
    password: {
      type: String,
      trim: true,
      required: true,
      min: 6,
    },
    token: {
      type: String,
    },
    imagePath: {
      type: String,
      trim: true,
      default: "",
    },
  },
  { versionKey: false }
);

UserSchema.pre("save", function (next) {
  const user = this;

  //비밀번호 변경때만 암호화를 하기 위한 조건인데 작동 조건을 잘 몰라서 사용하지 않고 있다.
  if (user.isModified("password")) {
    bcrypt.genSalt(saltRounds, (err, salt) => {
      if (err) return next(err);
      console.log("salt 생성 성공", salt);

      bcrypt.hash(user.password, salt, (err, hash) => {
        if (err) return next(err);
        user.password = hash;
        console.log("hash 생성 성공", hash);

        next();
      });
    });
  } else {
    next();
  }
});

UserSchema.methods.comparePassword = function (plainPassword, cb) {
  const user = this;

  bcrypt.compare(plainPassword, user.password, (err, pass) => {
    console.log("plaingPassword >> ", plainPassword);

    if (plainPassword === user.password) {
      console.log("password compare >> ", true);
    }
    console.log("pass >> ", pass);
    if (err) return cb(err);
    cb(null, pass);
  });
};

UserSchema.methods.encryptPassword = function (plainPassword, cb) {
  console.log("[encryptPassword] plainPassword >> ", plainPassword);
  bcrypt.genSalt(saltRounds, (err, salt) => {
    if (err) console.log("[bcrypt] salt err >> ", err);
    console.log("[bcrypt] salt >> ", salt);

    bcrypt.hash(plainPassword, salt, (err, hash) => {
      if (err) {
        console.log("[bcrypt] hash err >> ", err);
        cb(err);
      }
      console.log("[bcrypt] hash >> ", hash);
      cb(null, hash);
    });
  });
};

UserSchema.methods.createToken = function (cb) {
  const user = this;
  console.log("token user this ", user);
  const privateKey = "privateKeys";

  const token = jwt.sign(user._id.toHexString(), privateKey);
  console.log("token :: ", token);

  user.token = token;

  user.save((err, user) => {
    if (err) return cb(err);
    cb(null, user);
  });
};

UserSchema.statics.compareToken = function (token, cb) {
  const user = this;
  const privateKey = "privateKeys";

  jwt.verify(token, privateKey, (err, decodeToken) => {
    user.findOne({ _id: decodeToken, token: token }, (err, user) => {
      if (err) return cb(err);
      cb(null, user);
    });
  });
};

const User = mongoose.model("User", UserSchema);

module.exports = { User };

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
  },
  { versionKey: false }
);

UserSchema.pre("save", function (next) {
  const user = this;

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
    console.log("plaingPassword::", plainPassword);

    if (plainPassword === user.password) {
      console.log("password true");
    }
    console.log("PASS:", pass);
    if (err) return cb(err);
    cb(null, pass);
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
